-- Wachín Chess — Phase 1 schema
-- Run this in Supabase: Dashboard > SQL Editor > New query > paste > Run

-- ============================================================
-- PROFILES
-- One row per user, created automatically when they sign up.
-- ============================================================
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  chess_com_username text,
  lichess_username text,
  bio text,
  avatar_url text,
  rating_bullet int,
  rating_blitz int,
  rating_rapid int,
  rating_daily int,
  rating_last_synced_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Los perfiles son publicos"
  on public.profiles for select
  using (true);

create policy "Cada usuario edita su propio perfil"
  on public.profiles for update
  using (auth.uid() = id);

-- Auto-create a profile row whenever someone signs up via Supabase Auth.
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username)
  values (new.id, coalesce(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1)));
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================================
-- POSTS
-- A user-submitted game analysis / discussion post.
-- ============================================================
create table public.posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  body text,
  pgn text,
  source_url text,
  created_at timestamptz not null default now()
);

alter table public.posts enable row level security;

create policy "Los posts son publicos"
  on public.posts for select
  using (true);

create policy "Un usuario crea sus propios posts"
  on public.posts for insert
  with check (auth.uid() = user_id);

create policy "Un usuario edita o borra sus propios posts"
  on public.posts for update using (auth.uid() = user_id);

create policy "Un usuario borra sus propios posts"
  on public.posts for delete using (auth.uid() = user_id);

-- ============================================================
-- COMMENTS
-- ============================================================
create table public.comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now()
);

alter table public.comments enable row level security;

create policy "Los comentarios son publicos"
  on public.comments for select
  using (true);

create policy "Un usuario crea sus propios comentarios"
  on public.comments for insert
  with check (auth.uid() = user_id);

create policy "Un usuario borra sus propios comentarios"
  on public.comments for delete using (auth.uid() = user_id);

-- ============================================================
-- PUZZLE ATTEMPTS
-- One row per solved puzzle-mode session, used for leaderboards.
-- ============================================================
create table public.puzzle_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  mode text not null, -- e.g. 'rush_3min', 'survival', 'daily_streak'
  score int not null,
  created_at timestamptz not null default now()
);

alter table public.puzzle_attempts enable row level security;

create policy "Los intentos de puzzle son publicos"
  on public.puzzle_attempts for select
  using (true);

create policy "Un usuario crea sus propios intentos"
  on public.puzzle_attempts for insert
  with check (auth.uid() = user_id);

-- Handy view for a leaderboard: best score per user per mode.
create view public.leaderboard as
select distinct on (user_id, mode)
  user_id, mode, score, created_at
from public.puzzle_attempts
order by user_id, mode, score desc;

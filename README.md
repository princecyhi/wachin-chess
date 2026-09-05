# Wachín Chess

## Architecture (Phase 1)

- **Frontend:** React + Vite + Tailwind CSS. Static build, deployed to Cloudflare Pages (free, no bandwidth cap).
- **Backend:** Supabase (Postgres database + Auth + Storage). No custom server needed.
- **External data:** chess.com's free public API (ratings, game archives) and Lichess's free API (puzzles) — both called directly from the frontend or from a Supabase Edge Function later on.
- **Version control:** GitHub.

Phase 1 ships: a real landing page, and a database schema with accounts/profiles ready to go, but no login UI wired up yet — that's Phase 2.

## Setup — do this in order

### 1. Install Node.js (skip if you already have it)
Check first: open a terminal and run `node -v`. If you get a version number 18 or higher, skip to step 2.
If not, install it from https://nodejs.org (the LTS version).

### 2. Create the GitHub repo
1. Go to https://github.com/new
2. Name it `wachin-chess`, keep it public or private (your call), don't initialize with a README (we already have one).
3. Copy the folder I gave you into a new local folder on your machine.
4. In a terminal, inside that folder, run:
   ```
   git init
   git add .
   git commit -m "Phase 1: landing page + schema"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/wachin-chess.git
   git push -u origin main
   ```

### 3. Create your Supabase project
1. Go to https://supabase.com, sign up, click "New project."
2. Pick any name/region, set a database password (save it somewhere).
3. Once it's created, go to the **SQL Editor** tab, click "New query," paste in everything from `supabase/schema.sql`, and click **Run**.
4. Go to **Project Settings > API**. Copy the "Project URL" and the "anon public" key.

### 4. Connect your local project to Supabase
1. In your project folder, copy `.env.example` to a new file called `.env`.
2. Paste in the URL and anon key you just copied.

### 5. Install dependencies and run it locally
In your terminal, inside the project folder:
```
npm install
npm run dev
```
It'll print a local address (usually `http://localhost:5173`) — open that in your browser. You should see the landing page.

### 6. Tell me how it went
Once you see it running locally, tell me and we move to Phase 2: real login/signup, and wiring the chess.com rating pull into a profile page.

## What NOT to do yet
Don't deploy to Cloudflare Pages yet — we'll do that once there's more than a landing page to show for it. Running locally is enough for now.

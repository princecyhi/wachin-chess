import ChessboardMotif from "../components/ChessboardMotif.jsx";

const STEPS = [
  {
    n: "1",
    title: "Creá tu perfil",
    body: "Conectá tu usuario de chess.com y tu rating se actualiza solo — nunca más lo tenés que tipear a mano.",
  },
  {
    n: "2",
    title: "Entrená con puzzles",
    body: "Elegí un modo, resolvé, y subí en el ranking de la comunidad.",
  },
  {
    n: "3",
    title: "Subí tus partidas",
    body: "Pegá el link o el PGN y que la barra te diga en qué te la mandaste, jugada por jugada.",
  },
];

const FEATURES = [
  {
    title: "Puzzles todos los días",
    body: "Modos de partida rápida, por tiempo o por racha, con datos reales de posiciones jugadas.",
  },
  {
    title: "Análisis en video",
    body: "Partidas comentadas por gente de la comunidad — se aprende mirando cómo piensa otro.",
  },
  {
    title: "Rating en vivo",
    body: "Tu perfil muestra tu Elo de chess.com actualizado, sin que hagas nada.",
  },
  {
    title: "Cada partida, un foro",
    body: "Subís tu PGN y la comunidad comenta directo sobre el tablero.",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-ink">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-xl font-semibold tracking-tight text-white">
          Wachín Chess
        </span>
        <nav className="hidden items-center gap-8 text-sm text-muted sm:flex">
          <a href="#como-funciona" className="hover:text-white">
            Cómo funciona
          </a>
          <a href="#comunidad" className="hover:text-white">
            Comunidad
          </a>
        </nav>
        <a
          href="#sumate"
          className="rounded-sm bg-gold px-4 py-2 text-sm font-medium text-ink hover:bg-gold/90"
        >
          Sumate
        </a>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-24 md:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-medium leading-[1.1] text-white sm:text-5xl">
            El ajedrez que se aprende en la plaza, ahora en la web.
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ivory/80">
            Wachín Chess es la comunidad donde pibes de todo el país suben
            partidas, resuelven puzzles y aprenden mirando cómo piensan
            otros. Gratis, sin vueltas, hecho por y para quien está
            arrancando.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#sumate"
              className="rounded-sm bg-gold px-6 py-3 font-medium text-ink hover:bg-gold/90"
            >
              Sumate a la comunidad
            </a>
            <a
              href="#comunidad"
              className="rounded-sm border border-white/20 px-6 py-3 font-medium text-white hover:border-white/40"
            >
              Ver un análisis
            </a>
          </div>
        </div>
        <ChessboardMotif />
      </section>

      <section id="como-funciona" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <h2 className="font-display text-3xl font-medium text-white">
            Cómo funciona
          </h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.n}>
                <span className="font-display text-3xl text-gold">
                  {step.n}
                </span>
                <h3 className="mt-3 text-lg font-medium text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="comunidad" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <h2 className="font-display text-3xl font-medium text-white">
            Lo que vas a encontrar
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="border-t border-white/10 pt-5"
              >
                <h3 className="text-lg font-medium text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="sumate"
        className="border-t border-white/10 bg-ink-2"
      >
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-display text-2xl font-medium text-white">
            Arrancamos de a poco. Sumate desde el día uno.
          </h2>
          <p className="mx-auto mt-3 max-w-prose text-sm text-muted">
            El foro y las cuentas están en construcción — mientras tanto, el
            servidor de Discord es donde se está armando todo esto.
          </p>
          <a
            href="#"
            className="mt-6 inline-block rounded-sm bg-gold px-6 py-3 font-medium text-ink hover:bg-gold/90"
          >
            Unirme al Discord
          </a>
        </div>
      </footer>
    </div>
  );
}

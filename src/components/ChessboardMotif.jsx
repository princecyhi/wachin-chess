// A stylized, tilted chessboard used as the hero's visual anchor.
// Built as a plain grid + a few unicode piece glyphs rather than an
// interactive board — the real, playable board shows up once we build
// the puzzles page.

const PIECES = {
  12: "♞", // b-file-ish knight
  27: "♟",
  35: "♚",
  50: "♟",
};

export default function ChessboardMotif() {
  const squares = Array.from({ length: 64 });

  return (
    <div
      className="relative mx-auto w-full max-w-md select-none"
      style={{ perspective: "1200px" }}
      aria-hidden="true"
    >
      <div
        className="grid grid-cols-8 overflow-hidden rounded-sm border border-black/20 shadow-2xl shadow-black/40"
        style={{ transform: "rotateX(38deg) rotateZ(-8deg)" }}
      >
        {squares.map((_, i) => {
          const row = Math.floor(i / 8);
          const isLight = (row + i) % 2 === 0;
          return (
            <div
              key={i}
              className="relative flex aspect-square items-center justify-center text-2xl"
              style={{
                backgroundColor: isLight ? "#EDE6D6" : "#1D2129",
              }}
            >
              {PIECES[i] && (
                <span
                  style={{
                    color: isLight ? "#14171C" : "#E3B23C",
                    lineHeight: 1,
                  }}
                >
                  {PIECES[i]}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

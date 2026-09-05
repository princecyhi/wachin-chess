/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14171C",
        "ink-2": "#1D2129",
        ivory: "#EDE6D6",
        white: "#F7F5F0",
        gold: "#E3B23C",
        felt: "#3F6852",
        muted: "#8B92A0",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["IBM Plex Sans", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

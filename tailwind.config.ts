import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF6EE",
        sand: "#EFE2C9",
        maroon: {
          DEFAULT: "#5E1423",
          dark: "#3D0D18",
          light: "#7A1E30",
        },
        gold: {
          DEFAULT: "#A9772F",
          light: "#C79A4E",
          dim: "#8C6428",
        },
        ink: "#2A1E1A",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        sans: ["Jost", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      letterSpacing: {
        wideish: "0.04em",
      },
    },
  },
  plugins: [],
};
export default config;

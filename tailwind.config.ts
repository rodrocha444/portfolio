import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/atomic/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#154BD4",
      secondary: "#3CA9D7",
      white: "#F9F9F9",
      black: "#1C1C1C",
      gray: "#545454",
      error: "#ED5050",
      sucess: "#4FE06F",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

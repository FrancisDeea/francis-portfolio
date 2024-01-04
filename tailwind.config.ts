import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background1: "hsl(var(--background1) / <alpha-value>)",
        background2: "hsl(var(--background2) / <alpha-value>)",
        dark: "rgb(var(--dark) / <alpha-value>)",
        medium: "hsl(var(--medium) / <alpha-value>)",
        text: "hsl(var(--text) / <alpha-value>)",
        alert: "hsl(var(--alert) / <alpha-value>)",
      },
      backgroundImage: {
        gradient: "var(--gradient)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-animated"),
  ],
};
export default config;

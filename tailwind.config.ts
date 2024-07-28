import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#18DBD5",
        primaryVariant: "#A6D6ED",
        "on-primary": "#fff",
        secondary: "#2A1A51",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      keyframes: {
        menu: {
          "0%": {
            transform: "scale(0) translateX(-50%)",
            opacity: "0",
            borderRadius: "100%",
          },
          "100%": {
            transform: "scale(1) translateX(0)",
            opacity: "1",
            borderRadius: "0",
          },
        },
        menuReverse: {
          "0%": {
            transform: "scale(1) translateX(0)",
            opacity: "1",
            borderRadius: "0",
          },
          "100%": {
            transform: "scale(0) translateX(-50%)",
            opacity: "0",
            borderRadius: "100%",
          },
        },
      },
      animation: {
        menu: "menu 0.3s ease forwards",
        "menu-reverse": "menuReverse 0.3s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;

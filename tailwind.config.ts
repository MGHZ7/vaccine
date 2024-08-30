import { transform } from "next/dist/build/swc";
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
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        movingAround: {
          "0%": {
            transform: "translateX(0) translateY(0)",
          },
          "25%": {
            transform: "translateX(0) translateY(10%)",
          },
          "50%": {
            transform: "translateX(10%) translateY(10%)",
          },
          "75%": {
            transform: "translateX(10%) translateY(0)",
          },
          "100%": {
            transform: "translateX(0) translateY(0)",
          },
        },
        glow: {
          "0%": {
            filter: "brightness(1)",
            "-webkit-filter": "brightness(1)",
          },
          "50%": {
            filter: "brightness(1.3)",
            "-webkit-filter": "brightness(1.3)",
          },
          "100%": {
            filter: "brightness(1)",
            "-webkit-filter": "brightness(1)",
          },
        },
      },
      animation: {
        menu: "menu 0.3s ease forwards",
        "menu-reverse": "menuReverse 0.3s ease forwards",
        "fade-in": "fadeIn 0.5s ease-in forwards",
        "fade-out": "fadeOut 0.5s ease-out forwards",
        "moving-around": "movingAround 10s linear forwards infinite",
        glow: "glow 5s linear forwards infinite",
      },
      boxShadow: {
        contrast: "0 0 10px 5px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;

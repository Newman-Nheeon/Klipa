/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  extend: {
    colors: {
      blackish: "hsl(32, 31%, 10%, 1)",
      whitish: " hsl(0, 0%, 100%, 1)",
      rosebrown: "hsl(33, 30%, 49%, 1)",
      gold: "hsl(33, 32%, 26%, 1)",
      brownish:"hsl(30, 55%, 92%, 1)",
      deepbrown: "hsl(32, 55%, 61%, 1)",
      grey1: "hsl(218, 16%, 84%, 1)",
      grey2: "hsl(218, 15%, 65%, 1)",
      grey3: "hsl(218, 43%, 11%, 1)",
      grey4: "hsl(220, 13%, 46%, 1)"
    },
  },
};
export const plugins = [];

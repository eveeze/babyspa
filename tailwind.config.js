/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#76c5f0",
        secondary: "#ffffff",
        ternary: "#5ca7d6",
        quaternary: "#a7d8f7",
        dark: "#2c3e50",
      },
    },
  },
  plugins: [],
};

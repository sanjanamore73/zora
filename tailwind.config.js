/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00ffcc",
        secondary: "#7000ff",
        dark: "#0a0a0a",
        card: "#161616",
      },
    },
  },
  plugins: [],
}

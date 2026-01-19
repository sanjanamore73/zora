/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0066ff",
        secondary: "#7000ff",
        dark: "#ffffff",
        card: "#f5f5f5",
      },
    },
  },
  plugins: [],
}

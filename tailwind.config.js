/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "Light-Grey": "hsl(217, 12%, 63%)",
        "Dark-Blue": "hsl(213, 19%, 18%)",
        "Very-Dark-Blue": "hsl(216, 12%, 8%)",
        "Orange": "hsl(25, 97%, 53%)"
      }
    },
  },
  plugins: [],
}


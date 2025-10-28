/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,md}"],
  theme: {
    extend: {
      colors: {
        brand: "#ff007f",
        ink: "#0a0a0a",
        cream: "#f6f1ea",
      },
      fontFamily: {
        display: ['"Poppins"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)"
      }
    },
  },
  plugins: [],
}

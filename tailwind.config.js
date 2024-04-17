/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-grey' : '#F1183',
        'customblack': '#121212',
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui")
  ],
}


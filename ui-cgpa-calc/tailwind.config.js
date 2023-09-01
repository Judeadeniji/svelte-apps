import autoprefixer from "autoprefixer"

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        cal: ['"Cal"']
      }
    }
  },
  plugins: [
    autoprefixer()
  ]
};
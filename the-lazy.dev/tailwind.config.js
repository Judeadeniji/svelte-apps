/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': '"Open Sans"'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
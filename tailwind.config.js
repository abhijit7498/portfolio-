
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bgnavcolor':'rgba(142, 141, 176, 1)',
        'h1color':'floralwhite',
        'namecolor':'aqua',
        'infodiv':'#b9c0c0'
      },
      fontSize:{
        'javas':'6rem'
      },
      
      
    },
  },
  plugins: [],
}
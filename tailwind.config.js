//@type {import('tailwindcss').Config} 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'Background': "url('./src/assets/Background.png')",
      },
      screens: {
        '4k': '2560px', // ✅ 4K (2560px) screens ka custom breakpoint
      },
      screens: {
        'md-lg': '900px', // ✅ 900px custom breakpoint (768px aur 1080px ke beech)
      },
      fontFamily: {
        montserrat: ["Montserrat",],
        anticSlab: ["Antic Slab",],
        poppins: ["Poppins",],
        anton: ["Anton",],
        Libre: ["Libre Bodoni",],
        lato: ["Lato",]
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth : {
        container : '1170px'
      },
      colors : {
        primaryColor: '#1E1E1E',
        secondColor: '#616161'
      },
      fontFamily : {
        poppins : ['Poppins',' sans-serif'],
        Nunito : ['Nunito Sans', 'sans-serif'],
        openSans : ['Open Sans', 'sans-serif'],
        Roboto : [ 'Roboto', 'sans-serif']
      },
      boxShadow : {
        banarRectangel : '0px 20px 50px 0px rgba(0, 0, 0, 0.05)',
        MassageShadow : '0px 12px 16px 0px rgba(0, 0, 0, 0.08)'
      },
      borderRadius : {
        BanarRec : '0px 10px 10px 10px ',
        

      },
      backgroundImage : {
        subcribe : "url('./assets/Image/Group 100.png')"
      }
    },
  },
  plugins: [],
}
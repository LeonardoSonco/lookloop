/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple": "#413B6B",
        "greenHamburguer": "#98FFA2",
   
      },
      boxShadow:{
        "shadowBox" : "0px 4px 15px 5px rgba(0,0,0,0.1);"
        
      },
      screens:{
        'max-xs' : {'max': '380px'},
        'max-sm+' : {'max': '815px'},
        'max-md' : {'max': '768px'},
        'max-md+' : {'max': '929px'},
        'max-sm': {'max': '600px'},
        'max-lg': {'max': '1024px'},
        'max-mobile': {'max': '964px'},
      },
      borderRadius: {
        'large': '36px',
      }
    },
  },
  plugins: [],
}
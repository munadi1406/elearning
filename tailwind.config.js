/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'blue1':"#1D5D9B",
        'blue2':"#75C2F6",
        'cream1':"#F4D160",
        'cream2':"#FBEEAC"
      }
    },
  },
  plugins: [],
  
};

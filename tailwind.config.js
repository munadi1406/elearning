/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2b37db",
          secondary: "#348906",
          accent: "#fccebd",
          neutral: "#312334",
          "base-100": "#273354",
          info: "#2fb4e4",
          success: "#47d7ac",
          warning: "#ad920b",
          error: "#f07582",
        },
      },
    ],
  },
};

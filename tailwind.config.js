/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ff6347",
          "secondary": "#00bfff",
          "accent": "#ffd700",
          "neutral": "#f5f5f5",
          "base-100": "#576578",
          "info": "#e7e5e4",
          "success": "#32cd32",
          "warning": "#935f10",
          "error": "#f74640",
        },
      },
    ],
  },
  plugins: [daisyui],
}

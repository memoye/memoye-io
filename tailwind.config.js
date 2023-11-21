import { blurGradient1 } from './src/assets';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blurgradient': `url('../src/assets/backgrounds/vecteezy_abstract-gradient-blur-shape.png')`,
        // 'workspace': "url('../src/assets/images/workspace-desktop-by-olena-bohovyk-unsplash.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["retro", "dark", "black"],
  },
}

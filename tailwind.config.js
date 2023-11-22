/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blurgradient1': `url('../src/assets/backgrounds/vecteezy_abstract-gradient-blur-shape.png')`,
        'blurgradient2': `url('../src/assets/backgrounds/vecteezy_abstract-gradient-blur-shape1.png')`,
        'blurgradient3': `url('../src/assets/backgrounds/vecteezy_abstract-gradient-blur-shape2.png')`,
        'spotgradient': `url('../src/assets/backgrounds/vecteezy_abstract-spot-with-gradient.png')`,
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "retro", "cyberpunk", "black"],
  },
}

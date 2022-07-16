/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        my_bg_image:
          "linear-gradient(to right bottom, rgba(255,255,255,0),rgba(255,255,255,0)), url('../assets/images/hero.png')",
        body_bg:
          "linear-gradient(to right bottom, rgba(255,255,255,0),rgba(255,255,255,0)), url('../assets/images/layout.png')",
        layout_bg:
          "linear-gradient(to right bottom, rgba(255,255,255,0),rgba(255,255,255,0)), url('../assets/images/layout2.png')",
        layout_bg1:
          "linear-gradient(to right bottom, rgba(255,255,255,0),rgba(255,255,255,0)), url('../assets/images/layout3.png')",
      },
    },
    colors: {
      primary: "#ffffff",
      secondary: "#1eb432",
      active: "#109CF1",
      hover: "#BDCE45",
      footer: "#425075",
    },
  },
  plugins: [require("flowbite/plugin")],
};

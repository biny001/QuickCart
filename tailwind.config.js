/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cusblack: "#111111",
        cusgrey: "#839788",
        cuslightgrey: "#EEE0CB",
        cusrose: "#D05353",
        cuslightblue: "#BFD7EA",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

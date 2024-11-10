import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        'tmpk-blue': '#1436E0;',
        'tmpk-gray': '#EFEFEF;'
      }
    },
  },
  plugins: [flowbite.plugin()],
};

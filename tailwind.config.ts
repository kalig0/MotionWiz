/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "motion-gray": "#344055",
        "motion-blue": "#266DD3",
        "motion-white": "#EDEDF4",
        "motion-orange": "#FF5C00",
        "motion-red": "#FF0000",
        "motion-light-blue": "#1F64C4",
      },
    },
  },
  plugins: [],
};

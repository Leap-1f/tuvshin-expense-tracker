/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0166FF",

          accent: "#00ffff",

          neutral: "#000000",

          "base-100": "#F3F4F6",

          info: "#0000ff",

          success: "#00ff00",

          warning: "#FFBE00",

          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bgColor": "hsl(228, 100%, 84%)",
        "primaryButton": "hsl(213, 96%, 18%)",
        "secondaryButton": "hsl(243, 100%, 62%)",
        "neutral": "hsl(206, 94%, 87%)"
      },
      fontFamily: {
        ubuntuBold: ["Ubuntu-Bold", "sans-serif"],
        ubuntuMedium: ["Ubuntu-medium", "sans-serif"],
        ubuntuRegular: ["Ubuntu-Regular", "sans-serif"],
      },
      backgroundImage: {
        "bg-mobile": "url('./src/assets/images/bg-sidebar-mobile.svg')",
        "bg-desktop": "url('./src/assets/images/bg-sidebar-desktop.svg')"
      }
    },
  },
  plugins: [],
};

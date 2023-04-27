/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   sm: "580px",
    //   // => @media (min-width: 576px) { ... }

    //   md: "860px",
    //   // => @media (min-width: 768px) { ... }

    //   lg: "1400px",
    //   // => @media (min-width: 992px) { ... }

    //   xl: "1500px",
    //   // => @media (min-width: 1200px) { ... }
    // },
    extend: {
      backgroundImage: {
        hero: "url('../public/aa.jpg')",
      },
    },
  },
  plugins: [],
};

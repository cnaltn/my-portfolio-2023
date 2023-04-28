/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      smallest: "0.75rem",
      small: "0.813rem",
      normal: "0.938rem",
      h3: "1.125rem",
      h2: "1.25rem",
      big: "2rem",
      biggest: "3rem",
    },

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

import type { Config } from "tailwindcss";


interface TailwindUtilities {
  'no-scrollbar': {
    'scrollbar-width': 'none';
    '&::-webkit-scrollbar': {
      display: 'none';
    };
  };
}
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primery: "#101010",
        border: "#333638",
        text: "#777777",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      // fontWeight: {
      //   thin: 100,
      //   light: 300,
      // },
    },
  },
  plugins: [require("daisyui"),
  function ({ addUtilities  }: any) {
    addUtilities({
      '.no-scrollbar': {
        /* Firefox */
        'scrollbar-width': 'none',
        /* Safari and Chrome */
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    });
  },
  ],
};


export default config;

import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorVeryDarkBlue: 'hsl(200, 15%, 8%)', // Light Mode Text
        colorVeryLightGray: 'hsl(0, 0%, 98%)', // Light Mode Background
        colorDarkGray: 'hsl(0, 0%, 52%)', // Light Mode Input
        colorDarkBlue: 'hsl(209, 23%, 22%)', // Dark Mode Elements
        colorVeryDarkBlue2: 'hsl(207, 26%, 17%)', // Dark Mode Background
        colorWhite: 'hsl(0, 0%, 100%)' // Dark Mode Text & Light Mode Elements
      },
    },
  },
  plugins: [],
} satisfies Config;

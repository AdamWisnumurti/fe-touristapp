/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   poppins: ['Poppins', 'sans-serif'],
      // },
      colors: {
        primary: '#155bbd',
        secondary: '#ed8907',
        neutral: {
          10: '#fafafa',
          20: '#E8E8E8',
          30: '#DBDBDB',
          40: '#C2C2C2',
          50: '#A8A8A8',
          60: '#8f8f8f',
          70: '#737373',
          80: '#595959',
          90: '#3b3b3b',
          100: '#262626',
          150: '#F6F6F6',
          200: '#e5e5e5',
          250: '#e8e8e8',
          300: '#d4d4d4',
          400: '#a3a3a3',
          600: '#525252',
          700: '#404040',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontSize: {
        28: [
          '28px',
          {
            fontWeight: '600px',
            letterSpacing: '-0.14px',
          },
        ],
      },
      backgroundImage: {
        cityspace: "url('/images/tapera-menu/cityspace.png')",
      },
    },
  },
  plugins: [],
};

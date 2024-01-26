/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xm: '320px',
      },
      height: {
        'almost-screen': 'calc(-16rem + 100vh)',
        '225px': '14.063rem',
        '338px': '21.125rem',
      },
      width: {
        '400px': '25rem',
        '600px': '37.5rem',
      },
      minHeight: {
        'almost-screen': 'calc(-16rem + 100vh)',
        '42px': '2.625rem',
      },
      colors: {
        bgTopHeader: '#464855',
        textGray: '#e5e5e5',
        textBlack: '#121212',
        textGold: '#de8a14',
        green: '#cff1df',
        greenDark: '#619A46',
        greenHell: '#7DAA6A',
        goldHell: '#ffdd6f',
        gold: '#E1C158',
        buttonColor: '#fac382',
        buttonColorHover: '#febe73'
      },
    },
  },
  plugins: []
}


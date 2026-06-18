/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#e51e50',
          green: '#2F6940',
          orange: '#e97e2d'
        },
        neutral: {
          dark: '#131212',
          gray: '#2c2c2c',
          'light-gray': '#f2f2f2'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      screens: {
        '2xl': '1280px',
        'xl': '1024px',
        'lg': '768px',
        'md': '600px'
      }
    }
  },
  plugins: []
}

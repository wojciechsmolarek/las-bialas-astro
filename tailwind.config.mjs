/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand colors from original.css
        brand: {
          red: '#e51e50',
          pink: '#F16174',
          green: '#2F6940',
          'dark-green': '#328247',
          orange: '#e97e2d',
          gray: '#999999',
          'light-gray': '#f2f2f2',
          white: '#ffffff',
          black: '#131212',
          'dark-gray': '#2c2c2c',
        },
        // Legacy aliases for backward compatibility
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
        montserrat: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif']
      },
      fontWeight: {
        light: 200,
        normal: 400,
        semibold: 600,
        bold: 700
      },
      screens: {
        '2xl': '1280px',
        'xl': '1024px',
        'lg': '768px',
        'md': '600px',
        'sm': '480px'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      boxShadow: {
        'top-bar': '0px 4px 8px rgba(0, 0, 0, 0.1)',
        'description': '0 2px 12px rgba(0, 0, 0, 0.08)',
        'hover': '0 4px 16px rgba(0, 0, 0, 0.12)'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
}

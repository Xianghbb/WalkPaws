import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4DB6AC',
        'secondary': '#F9A889',
        'accent': '#FFAB91',
        'background-light': '#f6f7f7',
        'background-dark': '#151d1c',
        'text-light': '#4A4A4A',
        'text-dark': '#cbd5e1',
        'subtle-light': '#666666',
        'subtle-dark': '#bbbbbb',
        'card-light': '#ffffff',
        'card-dark': 'rgba(21, 29, 28, 0.5)',
      },
      fontFamily: {
        'display': ['var(--font-plus-jakarta-sans)', 'sans-serif'],
        'sans': ['var(--font-plus-jakarta-sans)', 'sans-serif'],
      },
      borderRadius: {
        'DEFAULT': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        'full': '9999px'
      },
      boxShadow: {
        'soft': '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

export default config
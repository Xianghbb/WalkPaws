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
        'primary': '#74D4C7',
        'secondary': '#F9A889',
        'background-light': '#F9F9F9',
        'background-dark': '#101d22',
        'text-light': '#333333',
        'text-dark': '#F9F9F9',
        'subtle-light': '#666666',
        'subtle-dark': '#bbbbbb',
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
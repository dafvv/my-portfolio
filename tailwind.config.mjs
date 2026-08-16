/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          light: '#f2f0ef',
          dark: '#191919',
        },
        ink: {
          light: '#191919',
          dark: '#f2f0ef',
        },
        card: {
          light: '#d9d9d9',
          dark: '#262626',
        },
      },
      fontFamily: {
        mono: ['"Iosevka NFM"', 'Iosevka', '"JetBrains Mono"', 'monospace'],
        sans: ['Overpass', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        sidebar: '156px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

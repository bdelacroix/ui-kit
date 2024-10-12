import { withTV } from 'tailwind-variants/dist/transformer.js'

/** @type {import('tailwindcss').Config} */
export default withTV({
  content: [
    './src/**/*.{vue,js,ts}',
    './.storybook/*.{js,ts}',
    './node_modules/@lavendr/ui-kit/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f2f7fb',
          '100': '#e7f0f8',
          '200': '#d3e2f2',
          '300': '#b9cfe8',
          '400': '#9cb6dd',
          '500': '#839dd1',
          '600': '#6a7fc1',
          DEFAULT: '#6374ae',
          '800': '#4a5989',
          '900': '#414e6e',
          '950': '#262c40',
        },
        neutral: {
          '50': '#F9FAFB',
          '100': '#F6F4F8',
          '200': '#ECE9F1',
          '300': '#DED9E4',
          '400': '#D0C9D6',
          '500': '#ACA4B6',
          '600': '#887E96',
          '700': '#645976',
          '800': '#3F3356',
          '900': '#2D1C3A',
          '950': '#1A051D',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
      }
    },
  },
  plugins: [],
})

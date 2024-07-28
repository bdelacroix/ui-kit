/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{vue,js,ts}', './.storybook/*.{js,ts}'],
  theme: {
    extend: {
      boxShadow: {
        border: '0px 0px 0px 2px black inset'
      },
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
          '950': '#262c40'
        },
        neutral: {
          '50': '#f8f8f8',
          '100': '#f3f3f3',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929'
        },
        black: {
          DEFAULT: '#000000'
        },
        white: {
          DEFAULT: '#ffffff'
        }
      }
    }
  },
  plugins: []
}

module.exports = {
  purge: {
    enable: true,
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/screens/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
  },
  theme: {
    colors: {
      'purple-lighter': '#AB93F1',
      'purple-light': '#C6B6F6',
      purple: '#9172EC',
      'purple-dark': '#6751A9',
      'purple-darker': '#292043',
      white: '#FFF',
      black: '#000',
      'gray-lighter': '#E6E6E6',
      'gray-light': '#B3B3B3',
      gray: '#808080',
      'gray-dark': '#4D4D4D',
      'gray-darker': '#1A1A1A',

      'red-lighter': '#FDCDD0',
      'red-light': '#FA6B75',
      red: '#F70D1A',
      'red-dark': '#A40812',
      'red-darker': '#520409',
    },
    extend: {},
  },
  plugins: [],
};

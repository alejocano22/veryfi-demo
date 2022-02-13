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
      'purple-lighter': '#f2e6ff',
      'purple-light': '#b066ff',
      purple: '#6600cc',
      'purple-dark': '#4d0099',
      'purple-darker': '#0c001a',
      white: '#fff',
      black: '#000',
      'gray-lighter': '#e6e6e6',
      'gray-light': '#b3b3b3',
      gray: '#808080',
      'gray-dark': '#4d4d4d',
      'gray-darker': '#1a1a1a',
    },
    extend: {},
  },
  plugins: [],
};

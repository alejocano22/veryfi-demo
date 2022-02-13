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
      black: '000',
    },
    extend: {},
  },
  plugins: [],
};

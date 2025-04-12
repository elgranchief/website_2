module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['module-resolver', {
      root: ['.'],
      alias: {
        '@': './',
        'lib/payload': './lib/payload',
        'components/PayloadRichText': './components/PayloadRichText'
      }
    }]
  ]
};

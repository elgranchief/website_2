module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['module-resolver', {
      root: ['.'],
      alias: {
        '@': './',
        'lib/payload': './lib/payload',
        'components/PayloadRichText': './components/PayloadRichText',
        // Handle the quoted paths that appear in the error logs
        "'lib/payload'": './lib/payload',
        "'components/PayloadRichText'": './components/PayloadRichText'
      },
      // Add extensions to ensure TypeScript files are found
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }]
  ]
};

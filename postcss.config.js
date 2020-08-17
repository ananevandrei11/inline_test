module.exports = {
  plugins: [
    require('autoprefixer'),
    require('css-mqpacker'),
    require('postcss-import'),
    require('postcss-preset-env'),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          }
        }
      ]
    }),
  ]
}
const path = require('path');

module.exports = {
  webpackConfig: {
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
      ]
    }
  },
  components: 'src/**/[A-Z]*.js'
};
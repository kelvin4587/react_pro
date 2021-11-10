module.exports = {
  entry: [
    './source/App.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: require.resolve('babel-loader'),
      options: {
        compact: true,
        presets: ['es2015', 'react']
      }
    }]
  },
  devtool: 'source-map'
}

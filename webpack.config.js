var webpack = require('webpack');

module.exports = {
  //devtool: 'source-map',
  entry: [
    './index.js'
  ],
  output: {
    path: 'dist',
    filename: 'index.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        loader: 'babel' ,
        query: {
          presets: ['es2015', 'stage-0']
        },
        exclude: /node_modules/
      }
    ]
  }
};
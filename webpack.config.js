const webpack = require('webpack');
const path = require('path');

const config = {
  debug: true,
  devtool: 'eval',

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      lib: path.join(__dirname, './lib')
    }
  },

  entry: [
    'webpack-hot-middleware/client?reload=true',
    './example/app/index.jsx'
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    pathinfo: true,
    publicPath: '/static/'
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]

};

module.exports = config;

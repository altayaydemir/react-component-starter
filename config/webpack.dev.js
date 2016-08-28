const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 8000;
const host = process.env.HOST || 'localhost';

const config = {
  debug: true,
  devtool: 'eval',

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  entry: [
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    'babel-polyfill',
    './example/index.jsx',
  ],

  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: 'bundle.js',
    pathinfo: true,
    publicPath: '/',
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../example/index.html'),
      filename: 'index.html',
      chunks: ['main'],
    }),
  ],

};

module.exports = config;

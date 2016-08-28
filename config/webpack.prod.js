const webpack = require('webpack');
const path = require('path');
const url = require('url');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Creating Public Path For Github Homepage
const homePage = require('../package.json').homepage;

let publicPath = homePage ? url.parse(homePage).pathname : '/';

if (!publicPath.endsWith('/')) {
  publicPath += '/';
}

const config = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  entry: [
    'babel-polyfill',
    './example/index.jsx',
  ],

  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: 'bundle.js',
    pathinfo: true,
    publicPath: publicPath,
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
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
      comments: false,
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../example/index.html'),
      filename: 'index.html',
      chunks: ['main'],
    }),
  ],

};

module.exports = config;

// Constants & Configs
const config = require('../');
const plugins = require('./_plugins');
const productionPlugins = require('./_plugins.prod');
const loaders = require('./_loaders');
const preLoaders = require('./_preLoaders');
const resolve = require('./_resolve');
const htmlPlugin = require('./_htmlPlugin');
const postcss = require('./_postCSS');

// Main Config for Lib & Docs Development
module.exports = {
  resolve,

  entry: [
    'babel-polyfill',
    './examples/index.jsx',
  ],

  output: {
    path: config.docs.output,
    filename: 'index.js',
    publicPath: './',
  },

  module: {
    preLoaders,
    loaders,
  },

  postcss,

  plugins: plugins.concat(productionPlugins, [
    htmlPlugin,
  ]),
};

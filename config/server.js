const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev');

const port = process.env.PORT || 8000;
const host = process.env.HOST || 'localhost';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
}).listen(port, host, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at ${host}:${port}`);
});

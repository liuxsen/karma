const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const config = merge(commonConfig, {
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      // 用 Istanbul 只监测业务代码
      {
        test: /\.js$/,
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: { esModules: true }
        },
        enforce: 'pre',
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules|\.spec\.js$/
      }
    ]
  }
});

module.exports = config;

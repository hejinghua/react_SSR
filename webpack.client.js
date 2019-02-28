const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base.js');

const clientConfig = {
  mode: 'development',
  entry: './src/client/index.js',
  output: { // 打包生成的文件
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
}
module.exports = merge(clientConfig, config)
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const config = require('./webpack.base.js');

const serverConfig = {
  target: 'node', //打包服务器端的文件
  mode: 'development',
  entry: './src/server/index.js',
  output: { // 打包生成的文件
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()],
}
module.exports = merge(serverConfig, config)
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  devServer: {
    hot: true, // 热模块
    hotOnly: true, // 即便项目代码更新后未生效，也不让浏览器自动刷新
    
  },
  module: {
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/html/index.html' // 使用这一模板
  })]
}
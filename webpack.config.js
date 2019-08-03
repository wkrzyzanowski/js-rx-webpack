const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/scripts/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html'
    })
  ],
  devServer: {
    port: 9090
  }
};

module.exports = config;

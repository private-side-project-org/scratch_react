const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/main.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|ttf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.mp4$/,
        type: 'asset/inline',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 8080,
    static: {
      directory: path.resolve(__dirname, 'build'),
    },
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html',
      favicon: './src/assets/favicon.png',
    }),
  ],
};

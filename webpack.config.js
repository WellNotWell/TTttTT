const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/script.ts',
    comic: './src/comic_script.ts'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      chunks: ['main'],
      filename: path.resolve(__dirname, 'index.html') 
    }),
    new HtmlWebpackPlugin({
      template: './comic.html',
      chunks: ['comic'],
      filename: path.resolve(__dirname, 'comic.html') 
    })
  ],
  mode: 'production'
};

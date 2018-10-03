const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.js$/, use: 'buble-loader' }
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};

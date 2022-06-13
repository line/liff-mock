const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

/** @type import('webpack').Configuration */
const config = {
  context: path.join(__dirname, 'src'),
  entry: './index.ts',
  output: {
    path: path.join(__dirname, 'dist', 'umd'),
    filename: 'liff-mock.js',
    library: {
      name: 'liffMock',
      type: 'umd',
      export: 'default',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: isProd ? 'production' : 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devtool: isProd ? false : 'inline-source-map',
};

module.exports = config;

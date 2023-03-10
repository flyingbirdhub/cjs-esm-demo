const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.cjs',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'EsmLib',
      type: 'commonjs',
    },
  },
};
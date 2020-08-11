const path = require(`path`);

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: true,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }, {
        test: /\.(ts|tsx)?$/,
        loader: `ts-loader`
      }
    ],
  },
  devtool: `source-map`,
  resolve: {
    alias: {
      '@': path.resolve('./src')
    },
    extensions: ['*', '.js', '.json', '.tsx', '.ts']
  }
};

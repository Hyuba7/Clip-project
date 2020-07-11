module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json','.css','gif','jpg','png','mp4'],
  },
  devServer: {
    contentBase: 'dist',
    open: true,
  },
};

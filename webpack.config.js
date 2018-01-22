const config = {
  entry: './index.js',
  module: {
    rules: [
        { test: /\.(html)$/, use: ['html-loader'] }
    ]
  },
  output: {
    path: __dirname,
    filename: "bundle.js"
}
};

module.exports = config;

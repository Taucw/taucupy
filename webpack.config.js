module.exports = {
  entry: "./app/App.js",
  output: {
    path: "./public/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.css/,
        loader: 'style!css',
      },
      { test: /\.woff2?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" }
    ]
  }
}

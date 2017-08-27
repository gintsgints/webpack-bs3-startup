var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
let path = require('path');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./app/index.js",
  output: {
    path: __dirname + "/js",
    filename: "index.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  module: {
    rules: [{
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)([\?]?.*)$/,
      loader: 'file-loader'
    }, {
      test: /\.(scss|sass)$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      include: [
        path.resolve(__dirname, 'node_modules/bootstrap-sass/assets/stylesheets/*.scss'),
        path.resolve(__dirname, 'app/app.scss')
      ]
    }]
  }
};

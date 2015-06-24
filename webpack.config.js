
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var data = require('./site/data');

module.exports = {

  entry: './site/entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /(\.js$|\.jsx$)/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: 'css-loader!cssnext-loader' },
    ]
  },

  cssnext: {
    compress: true
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', ['/'], data)
  ]

};


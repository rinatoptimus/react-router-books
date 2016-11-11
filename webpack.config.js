var webpack = require('webpack');
var path = require('path');

//
var autoprefixer = require('autoprefixer');
var precss = require('precss');
//

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      }, { 
        test: /\.json$/, loader: 'json' 
      }
    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
  } 
};

module.exports = config;
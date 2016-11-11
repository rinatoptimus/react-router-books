## React Router 
Based on this tutorial https://scotch.io/tutorials/routing-react-apps-the-complete-guide
##### 1) npm init
##### 2) npm install webpack babel-loader babel-preset-es2015 babel-preset-react serve --save-dev
##### 3) touch webpack.config.js
##### 4) Webpack.config.js:
#### var webpack = require('webpack');
#### var path = require('path');

#### var BUILD_DIR = path.resolve(__dirname, 'public');
#### var APP_DIR = path.resolve(__dirname, 'src');

#### var config = {
#### entry: APP_DIR + '/index.jsx',
#### output: {
#### path: BUILD_DIR,
#### filename: 'bundle.js'
#### },
#### module : {
#### loaders : [
#### {
#### test : /\.jsx?/,
#### include : APP_DIR,
#### loader : 'babel'
#### }
#### ]
#### }
#### };
#### module.exports = config;

##### 5) touch .babelrc

##### 6) .babelrc:
#### {
#### "presets" : ["es2015", "react"]
#### }
##### 7) Add to package.json:
#### "scripts": {
#### "watch" : "webpack -d --watch",
#### "build" : "webpack",
#### "serve" : "serve ./public"
#### }
##### 8) npm install react react-dom react-router --save
##### 9) npm run watch
##### 10) In another Terminal window: 
#### npm run serve

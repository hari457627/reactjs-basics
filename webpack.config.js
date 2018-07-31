var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname,'dist');
var SRC_DIR = path.resolve(__dirname,'src');

var config = {
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        rules: [{
          test: /\.js$/, // include .js files
          exclude: /node_modules/, // exclude any and all files in the node_modules folder
          use: [{
            loader: "babel-loader",
            query: {
                presets: ['react','es2015','stage-2']
            }
          }]
        }]
      }
};
module.exports = config;
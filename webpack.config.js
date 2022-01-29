var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var srcFolder = 'src';
var distFolder = 'dist';
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js'
    },
    externals: {
        express: 'express',
      },
    resolve: {
        extensions: ['.js', '.jsx'],
        fallback: {
             "crypto": false 
            },
            alias: {
                'ejs': 'ejs.min.js'
              }
      },
    module: {
        rules: [
            {
                test: /.(js,ejs)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'

            },{
                test: /.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },{
                test: /.(png,svg,jpg,gif)$/,
                use: [`file-loader`]
            }
        ]
    }
};
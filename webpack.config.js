var webpack = require('webpack');
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
 
module.exports = {
    entry: {
        'app':[
            'babel-polyfill',
            './index.js'
        ],
        'vendor':[
            'react',
            'react-dom',
            'react-router',
            'lodash'
        ]
    },
    output: {
        path: path.join(process.cwd(), 'dist'),
        publicPath:'',
        libraryTarget: 'umd',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loader: 'style-loader!css-loader' 
            },
            { 
                test: /\.js$/, 
                exclude: [/node_modules/],
                loader:'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            minChunks: Infinity
        }),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
          title: 'My App',
          filename: 'index.html',
          template:'index.html',
          chunks:['vendor','app']
        })
    ]
}
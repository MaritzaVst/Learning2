var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpackProvidePlugin = require("webpack-provide-global-plugin");
var webpack = require('webpack');
var path = require("path");

module.exports = {
    entry: {
        materialize: 'materialize-loader!./materialize.config.js',
        app: './src/index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [ "css-loader", "sass-loader"]
                })
            },
            { test: /\.(woff2?|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
            { test: /\.(ttf|eot|woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=fonts/[name].[ext]' }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 5002,
            server: { 
                baseDir: ['dist']
            }
        }),
        new ExtractTextPlugin('css/[name].css'),
        new HtmlWebpackPlugin({
            title: "Trello",
            template: "./src/index.html"
        }),
        new webpack.ProvidePlugin({
            jQuery: "jquery"
        })
    ]
}
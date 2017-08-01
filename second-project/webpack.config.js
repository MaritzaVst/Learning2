var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path:__dirname +"/dist"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:[ "css-loader"]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
        // new HtmlWebpackPlugin({
        //     template: "./src/index.html"
        // })
    ]
}
let path = require('path');
// let ExtractTextPlugin = require('extract-text-webpack-plugin');
// let webpack = require('webpack');
let MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/dist'
    },
    mode: "development",
    devServer: {
        contentBase: "dist",
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.html$/,
                use: [{
                        loader: "file-loader",
                        options: {
                            name: "[name].html"
                        }
                    },
                    {
                        loader: "extract-loader" // Puts content in a seperate file.
                    },
                    {
                        loader: "html-loader", // Lints html.
                        options: {
                            attrs: ["img:src"]
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png)/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "./media/[name].[ext]",
                        publicPath: function(url) {
                            return url.replace('/dist', '');
                        }
                    }
                }]
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {}
                }
            }
        ]
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
          })
    ]
};
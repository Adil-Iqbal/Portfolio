const BANNER = `

Adil Iqbal - Web Developer
@license GPLv3 for open source use only.
Copyright (c) 2019 Adil Iqbal.

This page has been compressed and processed via Webpack. 
For full and uncompressed source code, please visit:
https://github.com/Adil-Iqbal/Portfolio/tree/master/src

`

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

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
        rules: [{
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
                        publicPath: function (url) {
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
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new CopyPlugin([{
                from: 'src/projects',
                to: 'projects'
            },
            {
                from: 'src/cover-letter-and-resume.pdf',
                to: ''
            },
            {
                from: 'src/android-chrome-192x192.png',
                to: ''
            },
            {
                from: 'src/android-chrome-512x512.png',
                to: ''
            },
            {
                from: 'src/apple-touch-icon.png',
                to: ''
            },
            {
                from: 'src/favicon-16x16.png',
                to: ''
            },
            {
                from: 'src/favicon-32x32.png',
                to: ''
            },
            {
                from: 'src/favicon.ico',
                to: ''
            },
            {
                from: 'src/site.webmanifest',
                to: ''
            }
        ]),
        new webpack.BannerPlugin({
            banner: BANNER
        })
    ]
};
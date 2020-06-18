const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [{
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(svg|gif|jpg|png|eot|woff|ttf)$/,
                loaders: [
                    "file-loader"
                ]
            }
        ],
    },
    mode: "production",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
        plugins: [
        new webpack.DefinePlugin({
            'process.env.WEATHER_APP_APIKEY': JSON.stringify(process.env.WEATHER_APP_APIKEY),
        }),
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            template: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CopyPlugin([{
            from: 'img',
            to: 'img'
        }, ]),
    ],
};


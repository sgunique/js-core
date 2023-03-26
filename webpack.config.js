const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './index.jsx'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // [name].js or [name].jsx
                exclude: /node_modules/,
                use: ['babel-loader'], // use this loader to convert js/jsx files to javascript
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'jscore_learning.js',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin()], // hot module
    devServer: {
        static: path.resolve(__dirname, './dist'),
        hot: true,
    }
}

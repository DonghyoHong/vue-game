const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            Components: path.resolve(__dirname, './src/components/'),
        }
    },
    entry: "./src/main.js"
    , module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]

    }
    , plugins: [
        new VueLoaderPlugin()
        , new HtmlWebpackPlugin({
            template: "index.html",
        })
    ]
    , output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 9000
        , hot: true
    }
}
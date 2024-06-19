const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');

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
    ]
    , output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
}
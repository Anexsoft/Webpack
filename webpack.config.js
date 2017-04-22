var webpack = require("webpack");

module.exports = {
    entry: './src/app.js',
    output: {
        filename: './bin/app.bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ]
};
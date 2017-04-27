var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry:
    {
        Demo: './app/app.js',
    },
    node: {
        __dirname: true
    },
    output: {
        // Absolute output directory
        path: path.join(__dirname, "build"),
        chunkFilename: '[name].js',
        filename: '[name].bundle.js',
    },
    module: {
        rules: [{
            // JS LOADER
            // Reference: https://github.com/babel/babel-loader
            // Transpile .js files using babel-loader
            // Compiles ES6 and ES7 into ES5 code
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            // CSS LOADER
            // Reference: https://github.com/webpack/css-loader
            // Allow loading css through js
            //
            // Reference: https://github.com/postcss/postcss-loader
            // Postprocess your css with PostCSS plugins
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            exclude: /node_modules/
        }, {
            // ASSET LOADER
            // Reference: https://github.com/webpack/file-loader
            // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
            // Rename the file using the asset hash
            // Pass along the updated reference to your code
            // You can add here any file extension you want to get copied to your output
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file-loader'
        }]
    },
    plugins: [
        //Js bundle 文件压缩
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false,
        //     mangle: false,
        //     compress: {
        //         warnings: false
        //     },
        // }),
        // new webpack.BannerPlugin(
        //     "/* HSNET Version 1.0  ".concat((new Date()).toLocaleString()," By HPE. */"),
        //     {
        //         raw: true, // if true, banner will not be wrapped in a comment
        //         entryOnly: true // if true, the banner will only be added to the entry chunks
        //     }),
        new CopyWebpackPlugin([{
            from: __dirname + '/public'
        }])
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
};

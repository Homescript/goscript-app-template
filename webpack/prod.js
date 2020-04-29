const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ZipPlugin = require('zip-webpack-plugin');
const common = require('./common.js');
const pkg = require('../package.json');
const libraryName= pkg.name;

const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "../public/index.html"),
    filename: "./index.html",
    inject: false,
    minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
    },
});

module.exports = merge(
    common,
    {
        devtool: 'source-map',
        mode: 'production',
        entry: ["idempotent-babel-polyfill", path.join(__dirname, "../src/index.js")],
        optimization: {
            minimize: true
        },
        output: {
            globalObject: 'self',
            path: path.resolve(__dirname, '../dist'),
            filename: 'index.bundle.js',
            publicPath: '/',
            library: libraryName,
            libraryTarget: 'umd',
            umdNamedDefine: true,
            pathinfo: true, // show module paths in the bundle, handy for debugging
        },
        resolve: {
            extensions: [".js", ".jsx"],
            alias: {
                Actions: path.resolve(__dirname, '../src/actions'),
                Assets: path.resolve(__dirname, '../src/assets'),
                Api: path.resolve(__dirname, '../src/api'),
                Components: path.resolve(__dirname, '../src/components'),
                Containers: path.resolve(__dirname, '../src/containers'),
                Constants: path.resolve(__dirname, '../src/constants'),
                Custom: path.resolve(__dirname, '../src/custom'),
                Generators: path.resolve(__dirname, '../src/generators'),
                Reducers: path.resolve(__dirname, '../src/reducers'),
                Sagas: path.resolve(__dirname, '../src/sagas'),
                Selectors: path.resolve(__dirname, '../src/selectors'),
                Styles: path.resolve(__dirname, '../src/styles'),
                Utils: path.resolve(__dirname, '../src/utils'),
            }
        },
        plugins: [
            htmlWebpackPlugin,
            new webpack.DefinePlugin({
                'process.env':{
                    'NODE_ENV': JSON.stringify('production'),
                    'SERVICE_ID': null,
                    'API_KEY': null,
                }
            }),
            new ZipPlugin({
                filename: 'goscript-ui.zip',
            }),
        ]
    }
);
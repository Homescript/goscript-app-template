const path = require('path');
const merge = require('webpack-merge');
const ZipPlugin = require('zip-webpack-plugin');
const common = require('./common.js');
const pkg = require('../package.json');
const libraryName= pkg.name;

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
            publicPath: '/app/f04466ff-0f0f-498f-9588-1acbb5a45daa/',
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
            }
        },
        plugins: [
            new ZipPlugin({
                filename: 'goscript-ui.zip',
            })
        ]
    }
);
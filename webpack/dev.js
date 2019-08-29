const merge = require('webpack-merge');
const common = require('./common.js');
const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "../public/index.html"),
    filename: "./index.html",
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
        mode: 'development',
        entry: ["idempotent-babel-polyfill", path.join(__dirname, "./../src/index.js")],
        devtool: 'inline-source-map',
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
        output: {
            globalObject: 'self',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            pathinfo: true, // show module paths in the bundle, handy for debugging
        },
        devServer: {
            port: 3800,
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            historyApiFallback: true,
            disableHostCheck: true,
            proxy: {
                '/api/': {
                    target: "http://localhost/apis",
                    secure: true,
                    changeOrigin: true,
                    pathRewrite: {
                        '^/api/': ''
                    },
                }
            }
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
            htmlWebpackPlugin,
        ]
    }
);
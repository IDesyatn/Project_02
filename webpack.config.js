const path = require('node:path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin")

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if(isDevMode) {
        config.minimizer = [
            new TerserWebpackPlugin(),
            new OptimizeCssAssetWebpackPlugin()
        ]
    }
    return config
}

function resolve(filepath, fileName) {
    return path.resolve(process.cwd(),'web', 'src', 'pages', filepath, fileName)
}

const isDevMode = false;

module.exports = {
    mode: isDevMode ? 'development' : 'production',
    entry: {
        authPage: resolve('AuthPage', 'index.ts'),
        registration: resolve('Registration', 'index.ts'),
        main: resolve('Main', 'index.ts')
    },
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.json', '.js', '.png', '.jpg', '.svg']
    }, // ВАЖНО
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                include: path.resolve(process.cwd(), 'src'),
                loader: require.resolve('babel-loader'),
                options: {
                    presets: ["@babel/env", "@babel/preset-typescript"],
                    plugins: [],
                },
            },
            {
                test: /\.scss$/i,
                use: [
                    isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ]
            }
        ]
    },
    optimization: optimization()
    ,
    plugins: [new CleanWebpackPlugin({verbose: true}),
            !isDevMode && new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                filename: "auth.html",
                template: resolve('AuthPage', 'auth.html'),
                excludeChunks: ['reg', 'main']
            }),
            new HtmlWebpackPlugin({
                filename: "registration.html",
                template: resolve('Registration', 'registration.html'),
                excludeChunks: ['auth', 'main']
            }),
            new HtmlWebpackPlugin({
                filename: "main.html",
                template: resolve('Main', 'main.html'),
                excludeChunks: ['reg', 'auth']
            }),
            new CopyPlugin({
                patterns: [
                {
                    from: path.resolve(__dirname, './web/src/images'),
                    to:   path.resolve(__dirname, 'dist/images')
                }
        ]
    })
        ].filter(Boolean),
    devtool: 'source-map'
}

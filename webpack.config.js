const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');



module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: 'public/'
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
    },
    devServer: {
        contentBase: [path.join(__dirname, 'src'), path.join(__dirname, 'public')],
        watchContentBase: true,
        hotOnly: true,
        stats: 'errors-only'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react']
                        }
                    }
                ]
            },


            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader' // creates style nodes from JS strings
                    }, {
                        loader: 'css-loader' // translates CSS into CommonJS
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers: ['ie >= 8', 'last 4 version']
                                })
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader' // compiles Sass to CSS
                    }]
            },
            {
                test: /\.css$/,
                loaders: ["style-loader","css-loader"]
            },
            {
                test: /\.(svg|jpg|png)$/i,
                // include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                            mimetype: 'application/font-woff'
                        }
                    }

                ]
            }
            ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
};

const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',

    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
                template: './src/index.html'
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader',
                options:{
                    limit: false
                }
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx']
    }
}
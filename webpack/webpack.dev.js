const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const dotenv = require('dotenv')

const env = dotenv.config({ path: './.env.development' }).parsed
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
}, {})

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true,
        open: true,
    },
    plugins: [
        new webpack.DefinePlugin(envKeys),
        new ReactRefreshWebpackPlugin(),
        // new webpack.DefinePlugin({
        //     'process.env.name': JSON.stringify('Vishwas'),
        // }),
    ],
}
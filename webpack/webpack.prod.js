const webpack = require('webpack')
const dotenv = require('dotenv')

const env = dotenv.config({ path: './.env.production' }).parsed
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
}, {})

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin(envKeys),
    ],
}
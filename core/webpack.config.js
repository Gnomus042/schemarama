let UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    entry: './index.js',
    resolve:  {
        modules: ['./node_modules']
    },
    optimization: {
        minimize: true,
    },
    output: {
        filename: 'schemarama.bundle.min.js',
        library: 'schemarama'
    },
    plugins: [
        new UnminifiedWebpackPlugin()
    ],
    node: {
        tls: "empty",
        fs: "empty",
        net: "empty"
    }
};
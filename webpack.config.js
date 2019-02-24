const path = require('path');

module.exports = {
    entry: './app/main.ts',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'awesome-typescript-loader',
                test: /\.ts$/,
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            ".ts", ".js"
        ]
    }
}
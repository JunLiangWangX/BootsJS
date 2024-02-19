const path = require('path');
const findExportFiles=require('./utils/findExportFiles');



module.exports = {
    entry: {
        ...findExportFiles(__dirname,'./src')
    },
    mode: 'production',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
        library: '[name]',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
        ]
    }
}
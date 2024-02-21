const path = require('path');
const findExportFiles = require('./utils/find-export-files');


module.exports = {
    entry: {
        ...findExportFiles(__dirname, './src')
    },
    mode:'none',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
        library:{
            root: 'EnhanceJS',
            amd: 'EnhanceJS',
            commonjs: '[name]',
        },
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
const path = require('path');
const findExportFiles = require('./utils/find-export-files');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
    mode: 'none',
    entry: {
        index: {
            import: './src/index.ts',
            library: {
                name: 'EnhanceJS',
                type: 'umd',
                umdNamedDefine: true,
            },
        },
        ...findExportFiles(__dirname, './src')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
        library: {
            root: 'EnhanceJS',
            amd: 'EnhanceJS',
            commonjs: '[name]',
        },
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-typescript'
                            ],
                            plugins: ['@babel/plugin-transform-runtime'],
                        },
                    }, 'ts-loader']
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin(),
        ],
    },
}
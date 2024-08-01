const path = require('path');
const findExportFiles = require('./utils/find-export-files');
const { merge } = require('webpack-merge');
const baseConfig = {
    mode: 'none',
    entry: {
        ...findExportFiles(__dirname, './src')
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
    }
}
const esmConfig = merge(baseConfig, {
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            type: 'module',
        },
    },
    experiments: {
        outputModule: true,
    },
});

const cjsConfig = merge(baseConfig, {
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist/cjs/'),
        library: {
            type: 'commonjs2',
            export:'default'
        },
        //globalObject: 'this',
    },
});

const umdConfig = merge(baseConfig, {
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist/umd/'),
        libraryTarget: 'umd',
        globalObject: 'this',
    }
});
module.exports = [cjsConfig, esmConfig, umdConfig];
const path = require('path');
const findExportFiles = require('./utils/find-export-files');
const getLibraryName= require('./utils/get-library-name');
const { merge } = require('webpack-merge');
const entryFiles = findExportFiles(__dirname, './src');
const entryNames = Object.keys(entryFiles).reduce((acc, key) => {
    acc[key] = getLibraryName(entryFiles[key]);
    return acc;
}, {});


const baseConfig = {
    mode: 'none',
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
                    },
                    'ts-loader'
                ]
            }
        ]
    }
};

const esmConfig = merge(baseConfig, {
    entry: entryFiles,
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
    entry: entryFiles,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist/cjs/'),
        library: {
            type: 'commonjs2',
            export: 'default'
        },
    },
});

const umdConfig = Object.keys(entryFiles).map(entry => {
    return merge(baseConfig, {
        entry: {
            [entry]: entryFiles[entry]
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, './dist/umd/'),
            libraryTarget: 'umd',
            library: {
              name: entryNames[entry],
              type: 'var',
              export: 'default',
            },
            globalObject: 'this',
        }
    });
});

module.exports = [cjsConfig, esmConfig, ...umdConfig];
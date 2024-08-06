const path = require('path');
const typescript = require('@rollup/plugin-typescript');
const babel = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs= require ('@rollup/plugin-commonjs');
const terser =require ('@rollup/plugin-terser');
const findExportFiles = require('./utils/find-export-files.js');
const getLibraryName = require('./utils/get-library-name.js');

const entryFiles = findExportFiles(__dirname, './src');
const entryNames = Object.keys(entryFiles).reduce((acc, key) => {
    acc[key] = getLibraryName(entryFiles[key]);
    return acc;
}, {});

const baseConfig = {
    plugins: [
        nodeResolve({
            extensions: ['.tsx', '.ts', '.js'],
        }),
        commonjs(),
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**',
            extensions: ['.tsx', '.ts', '.js'],
            presets: [
                '@babel/preset-env',
                '@babel/preset-typescript'
            ],
            plugins: ['@babel/plugin-transform-runtime']
        }),
        terser()
    ]
};

const esmConfig = {
    input: entryFiles,
    output: {
        dir: path.resolve(__dirname, 'dist'),
        format: 'es',
        entryFileNames: '[name].js',
    },
    ...baseConfig,
    plugins: [
        ...baseConfig.plugins,
        typescript({
            tsconfig: './tsconfig.json',
            compilerOptions: {
                declaration: true,
                outDir: path.resolve(__dirname, 'dist')
            }
        })
    ]
};

const cjsConfig = {
    input: entryFiles,
    output: {
        dir: path.resolve(__dirname, './dist/cjs/'),
        format: 'cjs',
        entryFileNames: '[name].js',
    },
    ...baseConfig,
    plugins: [
        ...baseConfig.plugins,
        typescript({
            tsconfig: './tsconfig.json',
            compilerOptions: {
                declaration: false,
                outDir: path.resolve(__dirname, './dist/cjs/')
            }
        })
    ]
};

const umdConfig = Object.keys(entryFiles).map(entry => ({
    input: entryFiles[entry],
    output: {
        file: path.resolve(__dirname, `./dist/umd/${entry}.js`),
        format: 'umd',
        name: entryNames[entry]
    },
    ...baseConfig,
    plugins: [
        ...baseConfig.plugins,
        typescript({
            tsconfig: './tsconfig.json',
            compilerOptions: {
                declaration: false,
                outDir: path.resolve(__dirname, './dist/umd/')
            }
        })
    ]
}));

module.exports = [esmConfig, cjsConfig, ...umdConfig];

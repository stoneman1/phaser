'use strict';

const webpack = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {

    context: './src',

    entry: {
        phaser: './phaser.js'
    },

    output: {
        path: './dist',
        filename: '[name].js',
        library: 'Phaser'
    },

    plugins: [

        new WebpackShellPlugin({
            onBuildStart: 'node create-checksum.js',
            onBuildEnd: 'node copy-to-examples.js'
        })

    ]

};

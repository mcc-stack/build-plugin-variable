"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugin = ({ onGetWebpackConfig }, css) => {
    onGetWebpackConfig(config => {
        config.module
            .rule('scss')
            .use('sass-resources-loader')
            .loader(require.resolve('sass-resources-loader'))
            .options({
            resources: process.cwd() + '/src/_variable.scss'
        });
    });
};
exports.default = plugin;

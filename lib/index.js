"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugin = ({ onGetWebpackConfig }) => {
    function addSassResourcesLoader(configRule) {
        configRule
            .use('sass-resources-loader')
            .loader(require.resolve('sass-resources-loader'))
            .options({
            resources: process.cwd() + '/src/_variable.scss'
        });
    }
    onGetWebpackConfig(config => {
        const sassRegex = /\.(scss|sass)$/;
        const sassModuleRegex = /\.module\.(scss|sass)$/;
        addSassResourcesLoader(config.module.rule('scss').test(sassRegex));
        addSassResourcesLoader(config.module.rule('scss-module').test(sassModuleRegex));
    });
};
exports.default = plugin;

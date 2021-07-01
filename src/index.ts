import { IPlugin } from '@alib/build-scripts';
import Config from 'webpack-chain';

const plugin: IPlugin = ({ onGetWebpackConfig }) => {
  function addSassResourcesLoader(configRule: Config.Rule) {
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
    addSassResourcesLoader(
      config.module.rule('scss-module').test(sassModuleRegex)
    );
  });
};

export default plugin;

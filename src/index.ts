import { IPlugin } from '@alib/build-scripts';

const plugin: IPlugin = ({ onGetWebpackConfig }, css) => {
  onGetWebpackConfig(config => {
    // ['scss', 'scss-module'].forEach(rule => {
    ['scss'].forEach(rule => {
      config.module
        .rule(rule)
        .use('sass-resources-loader')
        .loader(require.resolve('sass-resources-loader'))
        .options({
          resources: process.cwd() + '/src/_variable.scss'
        });
    });
  });
};

export default plugin;

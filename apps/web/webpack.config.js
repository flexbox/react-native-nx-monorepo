const reactWebpackConfig = require('@nrwl/react/plugins/webpack');

function getWebpackConfig(config) {
  config = reactWebpackConfig(config);
  let reactNativeKey = config.resolve.alias['react-native'];
  if (!reactNativeKey) {
    config.resolve.alias['react-native'] = 'react-native-web';
    config.resolve.alias['react-native$'] = 'react-native-web';
    config.resolve.extensions.unshift('.web.js');
  }
  return config;
}

module.exports = getWebpackConfig;

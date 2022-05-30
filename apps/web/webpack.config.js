const reactWebpackConfig = require('@nrwl/react/plugins/webpack');

function getWebpackConfig(config) {
  config = reactWebpackConfig(config);
  let reactNativeKey = config.resolve.alias['react-native'];
  if (!reactNativeKey) {
    config.resolve.alias['react-native'] = 'react-native-web';
    config.resolve.alias['react-native$'] = 'react-native-web';
    config.resolve.extensions.unshift('.web.js');
  }

  // resolve victory-native as victory for the Web app
  // https://formidable.com/open-source/victory/docs/faq/#expo-web-apps-that-use-victory-native
  config.resolve.alias['victory-native'] = 'victory';

  return config;
}

module.exports = getWebpackConfig;

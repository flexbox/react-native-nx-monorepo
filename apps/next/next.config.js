const reactWebpackConfig = require('@nrwl/react/plugins/webpack');
const withNx = require('@nrwl/next/plugins/with-nx');
const { withExpo } = require('@expo/next-adapter');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  'react-native-web',
  'react-native-svg',
  'native-base',
  'react-native-svg',
]);

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack: (config, options) => {
    config = reactWebpackConfig(config);
    let reactNativeKey = config.resolve.alias['react-native'];
    if (!reactNativeKey) {
      config.resolve.alias['react-native'] = 'react-native-web';
      config.resolve.alias['react-native$'] = 'react-native-web';
      config.resolve.extensions.unshift('.web.js');
    }
    return config;
  },
};

module.exports = withNx(
  withPlugins(
    [
      withTM,
      [withFonts, { projectRoot: __dirname }],
      [withExpo, { projectRoot: __dirname }],
      // your plugins go here.
    ],
    nextConfig
  )
);

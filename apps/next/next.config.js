const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const { withNativebase } = require('@native-base/next-adapter');
const path = require('path');

module.exports = withNx(
  withNativebase({
    dependencies: ['@native-base/icons', 'react-native-web-linear-gradient'],
    nextConfig: {
      webpack: (config, options) => {
        config.module.rules.push({
          test: /\.ttf$/,
          loader: 'url-loader', // or directly file-loader
          include: path.resolve(__dirname, 'node_modules/@native-base/icons'),
        });
        config.resolve.alias = {
          ...(config.resolve.alias || {}),
          'react-native$': 'react-native-web',
          'react-native-linear-gradient': 'react-native-web-linear-gradient',
        };
        config.resolve.extensions = [
          '.web.js',
          '.web.ts',
          '.web.tsx',
          ...config.resolve.extensions,
        ];
        return config;
      },
    },
  })
);

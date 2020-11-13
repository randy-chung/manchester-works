const path = require('path');

/**
 * Export a function. Accept the base config as the only param.
 * @param {Object} options
 * @param {Required<import('webpack').Configuration>} options.config
 * @param {'DEVELOPMENT' | 'PRODUCTION'} options.mode - change the build configuration. 'PRODUCTION' is used when building the static version of storybook.
 */
module.exports = async ({ config, mode }) => {
  // Make whatever fine-grained changes you need

  if (mode === 'DEVELOPMENT') {
    config.module.rules.push({
      test: /\.scss$/,
      loaders: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            modules: {
              mode: 'local',
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              // localIdentName: '[sha1:hash:hex:4]',
              context: path.resolve(__dirname, 'src'),
              hashPrefix: 'my-custom-hash',
            },
          },
        },
        require.resolve('sass-loader'),
      ],
    });
  }

  // Return the altered config
  return config;
};

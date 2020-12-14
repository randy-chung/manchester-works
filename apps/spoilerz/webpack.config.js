/**
 *
 * Use this file to add custom webpack configs
 *
 */

// var fs = require('fs');

// var nodeModules = {};
// fs.readdirSync('node_modules')
//   .filter(function (x) {
//     return ['.bin'].indexOf(x) === -1;
//   })
//   .forEach(function (mod) {
//     nodeModules[mod] = 'commonjs ' + mod;
//   });

// require the main @nrwl/react/plugins/webpack configuration function.
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config, context) => {
  // first call it so that it @nrwl/react plugin adds its configs,
  nrwlConfig(config);

  // then override your config.
  return {
    ...config,
    node: {
      fs: 'empty',
    },
    // target: 'node',
  };
};

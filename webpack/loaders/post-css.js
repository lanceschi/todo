const __cwd = process.cwd();
const { join } = require('path');
const config = require('config');
const srcFolder = config.get('srcFolder');
const jsEnvVariables = config.get('js-env-variables');
const postcssEnvFunction = require('postcss-env-function');

const envFunctionProps = {
  importFrom: join(__cwd, srcFolder, jsEnvVariables),
};

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    sourceMap: true,
    plugins: () => [
      postcssEnvFunction(envFunctionProps),
      require('autoprefixer')({
        browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
      }),
    ],
  },
};

module.exports = postCSSLoader;

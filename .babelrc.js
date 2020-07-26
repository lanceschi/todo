let presets = [];
let plugins = [];

/**
 * @desc Configure dynamically Babel
 * @see https://babeljs.io/docs/en/configuration
 */

if (process.env.NODE_ENV === 'development') {
  presets = ['@babel/preset-env', '@babel/preset-react'];

  plugins = [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
  ];
} else if (process.env.NODE_ENV === 'production') {
  presets = ['@babel/preset-env', '@babel/preset-react'];

  plugins = [
    '@babel/plugin-proposal-class-properties',
    'transform-react-remove-prop-types',
  ];
} else if (process.env.NODE_ENV === 'test') {
  presets = ['@babel/preset-env', '@babel/preset-react'];

  plugins = [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
  ];
}

module.exports = { presets, plugins };

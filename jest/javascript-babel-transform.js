const { createTransformer } = require('babel-jest');

module.exports = createTransformer({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
  ],
});

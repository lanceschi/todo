const __cwd = process.cwd();
const { join } = require('path');
const resolvedAlias = require('./alias');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const { generate } = require('build-number-generator');

const { postCSSLoader } = require('./loaders');

const config = require('config');
const srcFolder = config.get('srcFolder');
const destFolder = config.get('destFolder');


const pkg = require('../package');
const buildNumber = generate();
const fullVersion = `v${pkg.version}.${buildNumber}`;
const pageTitle = `${pkg.description} - ${fullVersion}`;
const lastUpdated = new Date().toISOString();

module.exports = {
  target: 'web',
  mode: 'development',
  context: join(__cwd, srcFolder),
  resolve: resolvedAlias,
  entry: {
    app: './index.js',
  },
  output: {
    path: join(__cwd, destFolder),
    filename: '[name].js',
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
  },
  devServer: {
    contentBase: join(__cwd, destFolder),
    hot: true,
    compress: true,
    port: 3000,
    historyApiFallback: {
      index: '/',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  module: {
    rules: [
      { test: /\.hbs$/, loader: 'handlebars-loader' },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        exclude: /\.module\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          postCSSLoader,
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: {
                paths: [join(__cwd, 'src/less')],
              },
            },
          },
        ],
      },
      {
        test: /\.module\.less$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
            },
          },
          postCSSLoader,
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: {
                paths: [
                  join(__cwd, 'src/less'),
                  join(__cwd, 'node_modules/bootstrap/less'),
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: pageTitle,
      description: pageTitle,
      lastUpdated,
      template: join(__cwd, './src/page-templates/index.hbs'),
    }),
  ],
};

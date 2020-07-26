const __cwd = process.cwd();
const { join } = require('path');
const config = require('config');
const srcFolder = config.get('srcFolder');
const root = join(__cwd, srcFolder);

module.exports = {
  rootDir: __cwd,
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest/setup-file-after-env.js'],
  transform: {
    '^.+\\.(js|jsx|html)$': '<rootDir>/jest/javascript-babel-transform.js',
  },
  moduleNameMapper: {
    '^.+\\.(png|jpg|jpeg|svg)$': '<rootDir>/jest/img-transform.js',
    '^Components(.*)$': `${join(root, 'components')}/$1`,
    '^Api(.*)$': `${join(root, 'api')}/$1`,
    '^FSATypes(.*)$': `${join(root, '.fsa-types')}/$1`,
    '^FSAActions(.*)$': `${join(root, 'actions')}/$1`,
    '^Sagas(.*)$': `${join(root, 'sagas')}/$1`,
    '^Reducers(.*)$': `${join(root, 'reducers')}/$1`,
    '^CssEnvVariables(.*)$': `${join(root, 'less/js-env-variables')}/$1`,
    '^SrcRoot(.*)$': `${root}/$1`,
    '^.+\\.less$': '<rootDir>/jest/less-transform.js',
    '^.+\\.css$': '<rootDir>/jest/css-transform.js',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    'mock-states.js',
    '/mock-states/',
    '/mock-data/',
    'mock-payloads.js',
    '/mock-payloads/',
  ],
};

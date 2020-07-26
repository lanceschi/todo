const isDevelopment = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';
//const fetch = require('jest-fetch-mock');
//global.fetch = fetch;

const log = (isDevelopment || isTest ) ? console.log : jest.fn();
const error = (isDevelopment || isTest ) ? console.error : jest.fn();

global.console = {
  log,
  trace: jest.fn(),
  error,
  warn: console.warn,
  info: console.info,
  debug: console.debug,
};

global.Error.stackTraceLimit = 1;

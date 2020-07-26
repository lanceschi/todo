export { default as handleError } from './handle-error';
export const sleep = (ms = 1000) => new Promise((done) => setTimeout(done, ms));

const __cwd = process.cwd();
const { join } = require('path');
const config = require('config');
const srcFolder = config.get('srcFolder');

const root = join(__cwd, srcFolder);

module.exports = {
  alias: {
    Api: join(root, 'api'),
    Components: join(root, 'components'),
    Shared: join(root, 'shared'),
    AppStore: join(root, 'store'),
    FSATypes: join(root, '.fsa-types'),
    FSAActions: join(root, 'actions'),
    Reducers: join(root, 'reducers'),
    Sagas: join(root, 'sagas'),
    Less: join(root, 'less'),
  },
  extensions: ['.js', '.jsx'],
};

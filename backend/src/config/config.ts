import { join } from 'path';

export default () => {
  return require(join(__dirname, '../../../../config.js')).default;
};

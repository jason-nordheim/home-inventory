// jest.config.js
const {defaults} = require('jest-config');
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, '.js', '.jsx', 'd.ts', 'd.tsx','ts', 'tsx'],
};
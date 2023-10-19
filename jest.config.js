/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/src/singleton.ts'],
  moduleNameMapper: {
    "@exmpl/(.*)": "<rootDir>/src/$1",
  },
};
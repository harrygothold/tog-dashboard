import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  verbose: true,
  moduleNameMapper: {
    // maps @/ imports to src/ as jest doesn't understand the @ alias
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  clearMocks: true,
};

export default createJestConfig(config);

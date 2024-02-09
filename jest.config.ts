import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    clearMocks: false,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['/dependencies/', '/src/environments', 'src/shared/services'],
    coverageThreshold: {
        global: {
            branches: 27,
            functions: 12,
            lines: 28,
            statements: 29
        }
    },
    errorOnDeprecated: true,
    moduleDirectories: ['/dependencies/nodejs/node_modules'],
    modulePaths: ['/dependencies/nodejs/node_modules'],
    moduleFileExtensions: ['js', 'json', 'ts', 'node'],
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    }

};

export default config;

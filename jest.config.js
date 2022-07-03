module.exports = {
  roots: ["<rootDir>/src"],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx|tsx)$": "babel-jest",
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
  },
  testEnvironment: 'jsdom'
};

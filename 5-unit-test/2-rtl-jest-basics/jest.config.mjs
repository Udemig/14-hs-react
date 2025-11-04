export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": ["babel-jest", { configFile: "./babel.config.js" }],
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.cjs",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.cjs",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.cjs"],
  extensionsToTreatAsEsm: [".jsx"],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
};

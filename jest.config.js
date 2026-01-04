// jest.config.js
module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(png|svg|jpg|jpeg|gif)$": "<rootDir>/__mocks__/fileMock.js",
  },
};

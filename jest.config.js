module.exports = {
  "preset": "react-native",
    "setupFilesAfterEnv": [
      "@testing-library/jest-native/extend-expect"
    ],
    testPathIgnorePatterns: [
      "/node_modules/",
      "/android",
      "/ios",
    ],
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    collectCoverage: true,
    collectCoverageFrom: [
      "src/**/*.{ts,tsx,js,jsx}",
      "!src/**/*.spec.tsx"
    ],
    coverageReporters: ["lcov"]
};

module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: ["<rootDir>/src/tets/setupTests.ts"],
  testEnviroment: "jsdom",
};

module.exports = {
  testIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: ["<rootDir>/src/tets/setupTests.ts"],
  testEnviroment: "jsdom",
};

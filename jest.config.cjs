/*jest.config.js*/
/* eslint-env node */


const date = new Date();
const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}_${date.getHours().toString().padStart(2, '0')}-${date.getMinutes().toString().padStart(2, '0')}-${date.getSeconds().toString().padStart(2, '0')}`;

module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: true,
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleFileExtensions: ["ts", "tsx", "js"],
    reporters: [
      "default",
      ["jest-junit", { outputDirectory: "./src/test-logs", outputName: `my-report_${formattedDate}.xml` }],
    ],
  };
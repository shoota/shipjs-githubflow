module.exports = {
  publishCommand: () => "echo publish",
  testCommandBeforeRelease: ({ isYarn }) =>
    isYarn ? "yarn test" : "npm run test",
}

module.exports = {
  roots: ["<rootDir>"],
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  setupFiles: ["dotenv/config"],
  testPathIgnorePatterns: [
    "<rootDir>[/\\\\](build|docs|node_modules|.next|.vercel|coverage)[/\\\\]",
  ],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
}
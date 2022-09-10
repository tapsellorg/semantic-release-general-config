module.exports = {
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          { type: "feat", release: "minor" },
          { type: "fix", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "style", release: "patch" },
          { type: "improve", release: "patch" },
          { type: "perf", release: "major" },
          { breaking: true, release: "minor" },
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
        },
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "angular",
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
        },
        writerOpts: {
          commitsSort: ["subject", "scope"],
        },
      },
    ],
    [
      "@semantic-release/exec",
      {
        prepareCmd: "echo ${nextRelease.version} > release-next-version.log",
      },
    ],
    "@semantic-release/changelog",
    [
      "@semantic-release/git",
      {
        message: "chore: release <%= nextRelease.version %> [skip ci]",
        assets: ["package.json", "CHANGELOG.md"],
      },
    ],
    "@semantic-release/gitlab",
  ],
  branches: ["master", { name: "dev", prerelease: true }],
};

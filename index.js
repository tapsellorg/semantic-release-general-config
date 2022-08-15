module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'improve', release: 'patch' },
          { type: 'perf', release: 'major' },
          { breaking: true, release: 'minor' },
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
        },
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { type: 'feat', section: 'Features & Improvements' },
            { type: 'improve', section: 'Features & Improvements' },
            { type: 'fix', section: 'Bug Fixes' },
            { type: 'style', section: 'Style Changes', hidden: true },
          ],
        },
        linkReferences: false,
        writerOpts: {},
      },
    ],
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        message: 'chore: release <%= nextRelease.version %> [skip ci]',
        assets: ['package.json', 'CHANGELOG.md'],
      },
    ],
    '@semantic-release/gitlab',
  ],
  branches: ['master', { name: 'dev', prerelease: true }],
};

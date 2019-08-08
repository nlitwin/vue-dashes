module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    ['@semantic-release/git', {
      assets: ['dist/*.js', 'CHANGELOG.md', 'package.json', 'package-lock.json'],
    }],
  ],
}

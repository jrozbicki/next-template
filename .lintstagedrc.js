module.exports = {
  '*.{js,jsx}': ['eslint --fix'],
  '*.{ts,tsx}': [() => 'tsc', 'eslint --fix'],
}

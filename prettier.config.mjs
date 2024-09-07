/** @type {import('prettier').Config} */
const config = {
  endOfLine: 'lf',
  semi: false,
  useTabs: false,
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: 'avoid',
  tabWidth: 2,
  trailingComma: 'none',
  plugins: [
    'prettier-plugin-tailwindcss',
    'prettier-plugin-classnames',
    'prettier-plugin-merge'
  ]
}

export default config

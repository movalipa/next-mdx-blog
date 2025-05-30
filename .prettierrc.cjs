/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 80,
  proseWrap: "always",
  tabWidth: 2,
  trailingComma: "es5",
  bracketSpacing: true,
  semi: false,
  quoteProps: "consistent",
  bracketSameLine: false,
  arrowParens: "avoid",
  singleAttributePerLine: true,
  htmlWhitespaceSensitivity: "strict",
  endOfLine: "lf",
  singleAttributePerLine: true,
}

module.exports = config

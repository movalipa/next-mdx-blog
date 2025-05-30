import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

import importPlugin from "eslint-plugin-import"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import noRelativeImportPaths from "eslint-plugin-no-relative-import-paths"
import react from "eslint-plugin-react"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const config = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    plugins: {
      "simple-import-sort": simpleImportSort,
      "import": importPlugin,
      "no-relative-import-paths": noRelativeImportPaths,
      react,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "eqeqeq": "warn",

      "no-relative-import-paths/no-relative-import-paths": [
        "warn",
        { rootDir: "./", prefix: "@" },
      ],

      "import/first": "warn",
      "import/newline-after-import": "warn",
      "import/no-duplicates": "warn",
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            ["^next/", "^react$"],
            ["^react-icons/"],
            ["^\\w", "^@\\w"],
            ["^@/app"],
            ["^@/ui"],
            ["^@/components"],
            ["^@/stores"],
            ["^@/services"],
            ["^@/hooks"],
            ["^@/constants"],
            ["^@/utils"],
            ["^@/types"],
            ["^\\.\\./", "^\\./"], // Relative imports (parent and sibling)
          ],
        },
      ],
      "simple-import-sort/exports": "warn",

      "react/jsx-curly-brace-presence": [
        "warn",
        {
          props: "never",
          children: "never",
          propElementValues: "always",
        },
      ],
    },
  },
  {
    ignores: ["/node_modules", ".next"],
  },
]

export default config

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    ".velite/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports" },
      ],
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            // shared는 어느 레이어도 import 불가 (shared가 상위 레이어를 import하면 안 됨)
            { target: "./src/shared", from: "./src/entities" },
            { target: "./src/shared", from: "./src/features" },
            { target: "./src/shared", from: "./src/widgets" },
            { target: "./src/shared", from: "./src/pages" },
            // entities는 features/widgets/pages import 불가
            { target: "./src/entities", from: "./src/features" },
            { target: "./src/entities", from: "./src/widgets" },
            { target: "./src/entities", from: "./src/pages" },
            // features는 widgets/pages import 불가
            { target: "./src/features", from: "./src/widgets" },
            { target: "./src/features", from: "./src/pages" },
            // widgets는 pages import 불가
            { target: "./src/widgets", from: "./src/pages" },
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;

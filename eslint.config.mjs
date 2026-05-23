import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import prettierConfig from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores([".next/**", "out/**", "build/**", ".velite/**", "next-env.d.ts"]),

  // ─── simple-import-sort 플러그인 등록 ──────────────────────────────────────
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
  },

  // ─── 타입 인식 린팅 (src/만 적용 — 설정 파일 충돌 방지) ────────────────────
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // a?.b?.c 로 단축 가능한 경우 강제 (타입 정보 필요)
      "@typescript-eslint/prefer-optional-chain": "error",
      // 불필요한 타입 단언 금지 — x가 이미 string인데 as string (타입 정보 필요)
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
    },
  },

  // ─── 규칙 ─────────────────────────────────────────────────────────────────
  {
    rules: {
      // ── TypeScript ──────────────────────────────────────────────────────
      // type import를 강제 → 번들 크기에 영향 없는 타입만 import할 때 명시
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      // any 사용은 경고 (완전 금지는 현실적으로 어려움)
      "@typescript-eslint/no-explicit-any": "warn",
      // 미사용 변수: _ 접두사는 허용 (의도적 미사용 표시)
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      // ! non-null assertion 경고 (런타임 에러 원인)
      "@typescript-eslint/no-non-null-assertion": "warn",
      // string[] 형태 강제 (Array<string> 보다 가독성 좋음), 복잡한 타입은 Array<> 허용
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      // @ts-ignore 금지, @ts-expect-error는 이유 설명 필수
      "@typescript-eslint/ban-ts-comment": [
        "warn",
        {
          "ts-expect-error": "allow-with-description",
          "ts-ignore": true,
          "ts-nocheck": true,
          minimumDescriptionLength: 5,
        },
      ],
      // {} 타입 사용 금지 (object 또는 Record<string, unknown> 사용)
      "@typescript-eslint/no-empty-object-type": "error",
      // String, Number 등 래퍼 타입 금지 (string, number 사용)
      "@typescript-eslint/no-wrapper-object-types": "error",
      // ── Import 정렬 ────────────────────────────────────────────────────
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // 1. side effects (CSS, polyfill 등)
            ["^\\u0000"],
            // 2. React / Next.js 프레임워크
            ["^react$", "^react/", "^next$", "^next/"],
            // 3. 외부 패키지
            ["^@?\\w"],
            // 4. FSD 레이어 (의존 방향 순서: app → pages → widgets → features → entities → shared)
            [
              "^@/app",
              "^@/views",
              "^@/widgets",
              "^@/features",
              "^@/entities",
              "^@/shared",
            ],
            // 5. 상대 경로
            ["^\\."],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      // import 구문은 파일 최상단에
      "import/first": "error",
      // import 블록 뒤 빈 줄 강제
      "import/newline-after-import": "error",
      // 중복 import 금지 (inline type import 병합 허용)
      "import/no-duplicates": ["error", { "prefer-inline": true }],

      // ── FSD 레이어 간 의존성 방향 강제 ────────────────────────────────
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            { target: "./src/shared", from: "./src/entities" },
            { target: "./src/shared", from: "./src/features" },
            { target: "./src/shared", from: "./src/widgets" },
            { target: "./src/shared", from: "./src/views" },
            { target: "./src/entities", from: "./src/features" },
            { target: "./src/entities", from: "./src/widgets" },
            { target: "./src/entities", from: "./src/views" },
            { target: "./src/features", from: "./src/widgets" },
            { target: "./src/features", from: "./src/views" },
            { target: "./src/widgets", from: "./src/views" },
          ],
        },
      ],

      // ── React ──────────────────────────────────────────────────────────
      // 불필요한 <> Fragment 경고 (단, expression 래핑은 허용)
      "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],
      // 배열 index를 key로 사용 경고 (재렌더링 성능 저하 및 버그 원인)
      "react/no-array-index-key": "warn",
      // 자식 없는 컴포넌트는 self-closing 강제 (<Foo /> vs <Foo></Foo>)
      "react/self-closing-comp": "error",
      // 불필요한 JSX 중괄호 제거 (prop="str" vs prop={"str"})
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
      // displayName 없어도 에러 없음 (React Compiler가 처리)
      "react/display-name": "off",

      // ── 코드 스타일 ────────────────────────────────────────────────────
      // console.log 경고, warn/error 허용
      "no-console": ["warn", { allow: ["warn", "error"] }],
      // var 사용 금지
      "no-var": "error",
      // const 우선 사용
      "prefer-const": "error",
      // 일치 연산자 강제 (null 비교는 예외)
      eqeqeq: ["error", "always", { null: "ignore" }],
      // 객체 메서드 단축 표기 강제 ({ foo: function() {} → { foo() {} })
      "object-shorthand": "error",
      // 문자열 연결 대신 템플릿 리터럴 강제
      "prefer-template": "error",
      // 중첩 삼항 경고 (가독성 저하)
      "no-nested-ternary": "warn",
      // 불필요한 return 제거
      "no-useless-return": "error",
      // else 없이 return 가능한 경우 강제 (early return 패턴)
      "no-else-return": ["error", { allowElseIf: false }],
      // 불필요한 ternary 제거 (!!x ? true : false → !!x)
      "no-unneeded-ternary": "error",

      // ── 성능 최적화 ────────────────────────────────────────────────────
      // Next.js: <img> 대신 next/image 강제 (자동 최적화)
      "@next/next/no-img-element": "error",
      // Next.js: <a> 대신 next/link 강제 (클라이언트 사이드 네비게이션)
      "@next/next/no-html-link-for-pages": "error",
      // useEffect/useCallback deps 배열 누락 방지 (무한루프, stale closure 방지)
      "react-hooks/exhaustive-deps": "error",
    },
  },

  // ─── Prettier와 충돌하는 포매팅 규칙 전부 비활성화 (반드시 마지막) ──────────
  prettierConfig,
]);

export default eslintConfig;

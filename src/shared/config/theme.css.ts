import { createTheme, createThemeContract } from "@vanilla-extract/css";

// ─── Color Scale Palette ───────────────────────────────────────────────────
// CSS 변수가 아닌 순수 상수. lightTheme / darkTheme 양쪽에서 참조한다.

const gray = {
  "00": "#ffffff",
  "50": "#f9fafb",
  "100": "#f3f4f6",
  "200": "#e5e7eb",
  "300": "#d1d5db",
  "400": "#9ca3af",
  "500": "#6b7280",
  "600": "#4b5563",
  "700": "#374151",
  "800": "#1f2937",
  "900": "#111827",
  "950": "#030712",
  // alpha (hover · pressed · divider 용)
  a50: "#1118270d", // 5%
  a100: "#1118271a", // 10%
  a200: "#11182733", // 20%
} as const;

const blue = {
  "50": "#eff6ff",
  "100": "#dbeafe",
  "200": "#bfdbfe",
  "300": "#93c5fd",
  "400": "#60a5fa", // dark mode primary
  "500": "#3b82f6", // light mode primary
  "600": "#2563eb", // hover
  "700": "#1d4ed8",
  "800": "#1e40af",
  "900": "#1e3a8a",
  "950": "#172554",
  a50: "#3b82f60d",
  a100: "#3b82f61a",
  a200: "#3b82f633",
} as const;

const green = {
  "50": "#f0fdf4",
  "400": "#4ade80",
  "500": "#22c55e",
  "600": "#16a34a",
  "900": "#14532d",
  a100: "#22c55e1a",
} as const;

const yellow = {
  "50": "#fefce8",
  "400": "#facc15",
  "600": "#ca8a04",
  "700": "#a16207",
  "900": "#713f12",
  a100: "#ca8a041a",
} as const;

const red = {
  "50": "#fef2f2",
  "400": "#f87171",
  "500": "#ef4444",
  "600": "#dc2626",
  "900": "#7f1d1d",
  a100: "#dc26261a",
} as const;

const sky = {
  "50": "#f0f9ff",
  "400": "#38bdf8",
  "600": "#0284c7",
  "900": "#0c4a6e",
  a100: "#0284c71a",
} as const;

// ─── Theme Contract (시맨틱 레이어) ───────────────────────────────────────
// Seed Design의 3계층 구조:
//   scale (팔레트 상수) → semantic (의미 부여, CSS 변수) → component

export const vars = createThemeContract({
  color: {
    // ── Primary (브랜드 CTA) ──────────────────────────────────────────────
    primary: null,
    primaryHover: null,
    primaryPressed: null,
    primaryLow: null, // primary 색상 tint 배경
    primaryLowHover: null,

    // ── Ink / 텍스트 ──────────────────────────────────────────────────────
    inkText: null, // 주 텍스트
    inkTextLow: null, // 보조 텍스트 (날짜, 메타 등)
    inkTextSubtle: null, // 미세 텍스트 (placeholder, disabled)
    inkTextInverse: null, // primary 배경 위 텍스트

    // ── Paper / 배경 (Seed paper 패턴 - 라이트/다크에서 계층이 반전됨) ─────
    // Light: default=white → background=gray-50 → sheet=white (elevated)
    // Dark:  default=gray-950 → background=gray-900 → sheet=gray-800 (elevated)
    paperDefault: null, // 페이지 기본 배경
    paperBackground: null, // 섹션, 사이드바 배경
    paperSheet: null, // 카드, 패널 표면
    paperDialog: null, // 모달, 다이얼로그
    paperFloating: null, // 드롭다운, 툴팁
    paperAccent: null, // primary 컬러 강조 배경

    // ── Divider ────────────────────────────────────────────────────────────
    divider1: null, // 미세 구분 (alpha 5%)
    divider2: null, // 일반 테두리
    divider3: null, // 강한 구분선

    // ── 상태 색상 ──────────────────────────────────────────────────────────
    success: null,
    successLow: null,
    warning: null,
    warningLow: null,
    danger: null,
    dangerLow: null,
    info: null, // 링크, 정보 강조
    infoLow: null,

    // ── 오버레이 ───────────────────────────────────────────────────────────
    overlayLow: null, // 모달 뒤 딤 (약)
    overlayDim: null, // 모달 뒤 딤 (강)

    // ── 인터랙션 ───────────────────────────────────────────────────────────
    // solid 색상 대신 alpha 사용 → 어떤 배경 위에서도 일관된 hover/press 효과
    interactionHover: null,
    interactionPressed: null,

    // ── 코드 블록 ──────────────────────────────────────────────────────────
    codeBackground: null,
    codeBorder: null,
  },

  font: {
    sans: null,
    mono: null,
  },

  fontSize: {
    // label / caption 계열
    xs: null, // 12px — badge, caption
    sm: null, // 14px — label, secondary text  ← UI에서 가장 많이 쓰임
    // body 계열
    md: null, // 16px — body base             ← 두번째로 많이 쓰임
    lg: null, // 18px — body large
    // title / heading 계열
    xl: null, // 20px — subtitle
    "2xl": null, // 24px — title small
    "3xl": null, // 30px — title medium
    "4xl": null, // 36px — title large
    "5xl": null, // 48px — display / hero
  },

  fontWeight: {
    regular: null, // 400
    medium: null, // 500
    semibold: null, // 600
    bold: null, // 700
  },

  // Seed 패턴: heading 135% / body 150% 2계층
  lineHeight: {
    heading: null, // 1.35 — heading, title, label (압축감)
    body: null, // 1.5  — body, caption (가독성 우선)
    loose: null, // 1.75 — 긴 본문, 넓은 spacing
  },

  letterSpacing: {
    normal: null, // 0
    tight: null, // -0.02em
    tighter: null, // -0.04em
  },

  // 4px 그리드 기반
  space: {
    "1": null, //  4px
    "2": null, //  8px
    "3": null, // 12px
    "4": null, // 16px
    "5": null, // 20px
    "6": null, // 24px
    "8": null, // 32px
    "10": null, // 40px
    "12": null, // 48px
    "16": null, // 64px
    "20": null, // 80px
    "24": null, // 96px
  },

  // Seed 관찰 기준: 0 / 4 / 6 / 8 / 12 / 16 / 24 / ∞
  radius: {
    none: null, //    0px — 구분선, 전체 너비 요소
    xs: null, //    4px — chip, badge, tag
    sm: null, //    6px — input, small button
    md: null, //    8px — card, button
    lg: null, //   12px — panel, list item
    xl: null, //   16px — large card
    "2xl": null, //   24px — dialog, bottom sheet
    full: null, // 9999px — pill button, avatar
  },

  shadow: {
    sm: null, // 미세 elevation (카드 테두리 대체)
    md: null, // 드롭다운, 플로팅 버튼
    lg: null, // 모달, 다이얼로그
  },

  transition: {
    fast: null, // 150ms — hover, press 즉각 반응
    base: null, // 250ms — 일반 UI 전환
    slow: null, // 350ms — 페이지 전환, 큰 모션
  },

  // 레이어 시스템 (Seed의 z-index 관리 패턴)
  zIndex: {
    base: null, //   0
    above: null, //   1
    dropdown: null, //  10
    sticky: null, //  20
    overlay: null, //  30
    modal: null, //  40
    toast: null, //  50
  },
});

// ─── 공통 비색상 토큰 ──────────────────────────────────────────────────────

const baseTokens = {
  font: {
    sans: "var(--font-pretendard), 'Pretendard', system-ui, sans-serif",
    mono: "var(--font-jetbrains-mono), 'JetBrains Mono', 'Fira Code', monospace",
  },
  fontSize: {
    xs: "0.75rem", //   12px
    sm: "0.875rem", //  14px
    md: "1rem", //      16px
    lg: "1.125rem", //  18px
    xl: "1.25rem", //   20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", //   48px
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  lineHeight: {
    heading: "1.35", // Seed: static-small (135%)
    body: "1.5", //    Seed: static-medium (150%)
    loose: "1.75", //  Seed: static-large (162% 기준 + 여유)
  },
  letterSpacing: {
    normal: "0",
    tight: "-0.02em",
    tighter: "-0.04em",
  },
  space: {
    "1": "0.25rem", //  4px
    "2": "0.5rem", //   8px
    "3": "0.75rem", //  12px
    "4": "1rem", //     16px
    "5": "1.25rem", //  20px
    "6": "1.5rem", //   24px
    "8": "2rem", //     32px
    "10": "2.5rem", //  40px
    "12": "3rem", //    48px
    "16": "4rem", //    64px
    "20": "5rem", //    80px
    "24": "6rem", //    96px
  },
  radius: {
    none: "0px",
    xs: "4px",
    sm: "6px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2xl": "24px",
    full: "9999px",
  },
  transition: {
    fast: "150ms ease", // hover, press
    base: "250ms ease", // 일반 전환
    slow: "350ms cubic-bezier(0.18, 0.89, 0.45, 1.12)", // 페이지 전환 (살짝 오버슈팅)
  },
  zIndex: {
    base: "0",
    above: "1",
    dropdown: "10",
    sticky: "20",
    overlay: "30",
    modal: "40",
    toast: "50",
  },
} as const;

// ─── Light Theme ───────────────────────────────────────────────────────────

export const lightTheme = createTheme(vars, {
  ...baseTokens,
  color: {
    primary: blue["500"], // #3b82f6
    primaryHover: blue["600"], // #2563eb
    primaryPressed: blue["700"], // #1d4ed8
    primaryLow: blue["50"], // #eff6ff
    primaryLowHover: blue["100"], // #dbeafe

    inkText: gray["900"], // #111827
    inkTextLow: gray["600"], // #4b5563
    inkTextSubtle: gray["400"], // #9ca3af
    inkTextInverse: gray["00"], // #ffffff

    // paper: 라이트는 흰색이 가장 위, gray가 베이스
    paperDefault: gray["00"], //  #ffffff  — 페이지 기반
    paperBackground: gray["50"], //  #f9fafb  — 섹션 배경
    paperSheet: gray["00"], //  #ffffff  — 카드 (elevated)
    paperDialog: gray["00"], //  #ffffff
    paperFloating: gray["00"], //  #ffffff
    paperAccent: blue["50"], //  #eff6ff  — primary tint

    divider1: gray["a50"], //  5% black alpha
    divider2: gray["200"], //  #e5e7eb
    divider3: gray["300"], //  #d1d5db

    success: green["600"], // #16a34a
    successLow: green["50"], // #f0fdf4
    warning: yellow["600"], // #ca8a04
    warningLow: yellow["50"], // #fefce8
    danger: red["600"], // #dc2626
    dangerLow: red["50"], // #fef2f2
    info: sky["600"], // #0284c7
    infoLow: sky["50"], // #f0f9ff

    overlayLow: "#00000033", // 20% black
    overlayDim: "#00000080", // 50% black

    // alpha 기반 — 어떤 배경에서도 일관된 인터랙션
    interactionHover: gray["a50"], //  5% black
    interactionPressed: gray["a100"], // 10% black

    codeBackground: gray["100"], // #f3f4f6
    codeBorder: gray["200"], // #e5e7eb
  },
  shadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.06)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)",
  },
});

// ─── Dark Theme ────────────────────────────────────────────────────────────

export const darkTheme = createTheme(vars, {
  ...baseTokens,
  color: {
    primary: blue["400"], // #60a5fa — 어두운 배경에서 더 밝게
    primaryHover: blue["300"], // #93c5fd
    primaryPressed: blue["200"], // #bfdbfe
    primaryLow: blue["a100"], // blue-500 10% alpha
    primaryLowHover: blue["a200"], // blue-500 20% alpha

    inkText: gray["50"], //  #f9fafb
    inkTextLow: gray["400"], //  #9ca3af
    inkTextSubtle: gray["500"], //  #6b7280
    inkTextInverse: gray["900"], //  #111827

    // paper: 다크는 반전 — 가장 어두운 것이 베이스, elevated일수록 밝아짐
    paperDefault: "#0d1117", //  GitHub dark base
    paperBackground: "#161b22", //  GitHub dark secondary
    paperSheet: "#1c2128", //  카드 (elevated +1)
    paperDialog: "#1c2128",
    paperFloating: "#22272e", //  드롭다운 (elevated +2)
    paperAccent: blue["950"], //  #172554 — primary tint

    divider1: "#ffffff0d", //  5% white alpha
    divider2: "#30363d", //  GitHub border
    divider3: "#484f58",

    success: green["400"], // #4ade80 — 다크에서 더 밝게
    successLow: `${green["900"]}40`, // green-900 25%
    warning: yellow["400"], // #facc15
    warningLow: `${yellow["900"]}40`, // yellow-900 25%
    danger: red["400"], // #f87171
    dangerLow: `${red["900"]}40`, // red-900 25%
    info: sky["400"], // #38bdf8
    infoLow: `${sky["900"]}40`, // sky-900 25%

    overlayLow: "#00000066", // 40% (다크에서 더 강하게)
    overlayDim: "#000000b3", // 70%

    // white alpha 기반 — 다크 배경 위 인터랙션
    interactionHover: "#ffffff0f", //  6% white
    interactionPressed: "#ffffff1a", // 10% white

    codeBackground: "#161b22",
    codeBorder: "#30363d",
  },
  shadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.3)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.3)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.5), 0 4px 6px -4px rgb(0 0 0 / 0.4)",
  },
});

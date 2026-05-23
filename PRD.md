# PRD: Personal Website (Blog + Portfolio + Books)

## 1. 프로젝트 개요

| 항목      | 내용                                                        |
| --------- | ----------------------------------------------------------- |
| 목적      | 개발 경험, 생각, 포트폴리오, 독서 기록을 담는 개인 웹사이트 |
| 배포      | Vercel (정적 + serverless functions)                        |
| 별도 서버 | 없음 (Vercel 인프라 내에서 해결)                            |
| 도메인    | 커스텀 도메인 (Vercel DNS)                                  |

---

## 2. 페이지 구조

```
/                       홈
/blog                   블로그 글 목록
/blog/[slug]            블로그 글 상세
/blog/categories/[cat]  카테고리별 글 목록
/books                  읽은 책 목록
/books/[slug]           독후감 (독후감이 있는 책만)
/portfolio              포트폴리오
/resume                 이력서
```

### 페이지별 상세

#### 홈 `/`

- 소개 한 줄 + 링크 모음 (GitHub, LinkedIn 등)
- 최근 블로그 글 N개
- 최근 읽은 책 N개
- 진행 중인 프로젝트 하이라이트

#### 블로그 `/blog`

- 글 목록 (최신순 기본)
- 카테고리 필터 탭: `전체 | 개발 | 회고 | 기록 | 경제 | ...`
- 태그 목록
- 클라이언트 사이드 검색
- 각 글 카드: 제목, 카테고리, 태그, 날짜, 읽기 시간, 조회수

#### 블로그 글 상세 `/blog/[slug]`

- MDX 렌더링
- 목차 (TOC) — 우측 고정 (데스크탑)
- 읽기 시간, 날짜, 카테고리, 태그, 조회수
- 이전글 / 다음글 네비게이션
- 공유 버튼 (링크 복사, 트위터)
- 코드 블록: 문법 강조 + 복사 버튼

#### 읽은 책 `/books`

- 책 카드 그리드: 표지 이미지, 제목, 저자, 완독일, 별점
- 독후감 있는 책: 클릭 시 `/books/[slug]` 이동
- 독후감 없는 책: 클릭 시 모달 or 비활성

#### 독후감 `/books/[slug]`

- 책 메타 (표지, 제목, 저자, 출판사, 완독일, 별점)
- MDX 독후감 본문
- 관련 책 추천 (같은 장르/태그)

#### 포트폴리오 `/portfolio`

- 프로젝트 카드: 이름, 설명, 기술 스택, GitHub/배포 링크
- 필터: 기술 스택별

#### 이력서 `/resume`

- 경력, 교육, 기술 스택, 오픈소스 기여
- PDF 다운로드 버튼

---

## 3. 기술 스택

### Core

| 역할            | 선택              | 이유                                                   |
| --------------- | ----------------- | ------------------------------------------------------ |
| Framework       | **Next.js 15**    | React 19 내장, App Router SSG, `output: 'export'` 지원 |
| Language        | **TypeScript 5**  |                                                        |
| React           | **React 19**      | Next.js 15에 내장                                      |
| React Compiler  | **실험적 활성화** | `experimental.reactCompiler: true`                     |
| Package Manager | **pnpm**          |                                                        |

### 스타일링

| 역할      | 선택                | 이유                                       |
| --------- | ------------------- | ------------------------------------------ |
| CSS       | **vanilla-extract** | zero-runtime, type-safe, FSD 슬라이스 공존 |
| Utility   | **Sprinkles**       | 원자 CSS 유틸리티를 타입 안전하게          |
| 테마 토큰 | `createTheme`       | 다크/라이트 모드 CSS 변수 관리             |

### UI

| 역할        | 선택                                        | 이유                                           |
| ----------- | ------------------------------------------- | ---------------------------------------------- |
| Headless UI | **Radix UI**                                | Production-ready, 넓은 생태계, WAI-ARIA 완성도 |
| 아이콘      | **Lucide React**                            |                                                |
| 폰트        | **next/font** (Pretendard + JetBrains Mono) |                                                |

> Base UI, Ariakit은 성숙도가 높아지면 마이그레이션 고려. 블로그 특성상 컴포넌트 수가 적어 전환 비용 낮음.

### 콘텐츠

| 역할            | 선택                    | 이유                                                      |
| --------------- | ----------------------- | --------------------------------------------------------- |
| 콘텐츠 레이어   | **Velite**              | contentlayer 후계자, Zod 스키마, MDX 지원, 빌드 타임 변환 |
| MDX 렌더링      | Velite 내장             |                                                           |
| 코드 하이라이팅 | **Shiki** (Velite 내장) |                                                           |
| 날짜            | **date-fns**            |                                                           |

### 데이터 / 상태

| 역할        | 선택                               | 이유                                     |
| ----------- | ---------------------------------- | ---------------------------------------- |
| 전역 상태   | **Jotai**                          | 테마 등 최소 상태, 가볍고 FSD 친화적     |
| 조회수 저장 | **Vercel KV (Redis)**              | 별도 인프라 없이 Vercel 내에서 해결      |
| 조회수 API  | **Vercel API Routes** (serverless) | 동일 배포 내, 관리 부담 없음             |
| 검색        | **Fuse.js**                        | 클라이언트 사이드 퍼지 검색, 서버 불필요 |

### 분석 / SEO

| 역할        | 선택                      | 이유                                |
| ----------- | ------------------------- | ----------------------------------- |
| 방문자 분석 | **Vercel Analytics**      | Vercel 배포 시 무료, 스크립트 한 줄 |
| 사이트맵    | Next.js `sitemap.ts`      | 빌드 타임 생성                      |
| RSS         | 커스텀 `feed.xml` 생성    |                                     |
| OG 이미지   | `next/og` (ImageResponse) | 동적 OG 이미지                      |

### 개발 도구

| 역할     | 선택                           |
| -------- | ------------------------------ |
| 린터     | ESLint (flat config)           |
| 포맷터   | Prettier                       |
| Git hook | simple-git-hooks + lint-staged |

---

## 4. 조회수 구현

별도 서버 없이 Vercel 인프라 내에서 처리.

```
클라이언트
  └─ GET /api/views/[slug]     ← 조회수 읽기
  └─ POST /api/views/[slug]    ← 조회수 +1 (페이지 진입 시)
       ↕
  Vercel API Route (serverless function)
       ↕
  Vercel KV (Redis)
       key: "views:blog:getting-started" → 1234
       key: "views:books:atomic-habits"  → 567
```

- 클라이언트에서 페이지 진입 시 POST 한 번 → Redis INCR
- 중복 카운트 방지: 세션 스토리지에 슬러그 기록 (새로고침 방지)
- 봇 트래픽: User-Agent 기반 간단 필터 (Edge Middleware)

---

## 5. FSD 아키텍처

### 디렉토리 구조

```
src/
├── app/                              # Next.js App Router (진입점만)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   ├── [slug]/page.tsx
│   │   └── categories/[category]/page.tsx
│   ├── books/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── portfolio/page.tsx
│   ├── resume/page.tsx
│   └── api/
│       └── views/[slug]/route.ts     # Vercel KV 조회수 API
│
├── pages/                            # FSD: 페이지 단위 조합
│   ├── home/
│   ├── blog-list/
│   ├── blog-detail/
│   ├── book-list/
│   ├── book-detail/
│   ├── portfolio/
│   └── resume/
│
├── widgets/                          # FSD: 독립 동작하는 복합 UI
│   ├── header/
│   ├── footer/
│   ├── post-list/
│   ├── post-card/
│   ├── book-list/
│   ├── book-card/
│   ├── toc/
│   ├── search-modal/
│   └── project-card/
│
├── features/                         # FSD: 사용자 인터랙션
│   ├── theme-toggle/
│   ├── post-search/
│   ├── post-share/
│   ├── category-filter/
│   ├── tag-filter/
│   ├── pagination/
│   └── view-counter/
│
├── entities/                         # FSD: 도메인 모델
│   ├── post/
│   │   ├── model/
│   │   │   ├── post.types.ts
│   │   │   └── post.schema.ts        # Velite 스키마
│   │   ├── ui/
│   │   │   ├── PostMeta.tsx
│   │   │   ├── PostMeta.css.ts
│   │   │   └── index.ts
│   │   └── lib/
│   │       ├── formatDate.ts
│   │       └── calcReadingTime.ts
│   ├── book/
│   │   ├── model/
│   │   ├── ui/
│   │   └── lib/
│   ├── project/
│   │   ├── model/
│   │   └── ui/
│   └── category/
│       ├── model/
│       └── lib/
│
└── shared/                           # FSD: 재사용 기반
    ├── ui/                           # Button, Badge, Typography, Card 등
    ├── config/                       # 사이트 메타데이터, 카테고리 상수
    ├── lib/                          # cn(), formatDate() 등
    ├── hooks/                        # useTheme, useMediaQuery, useViewCount
    ├── api/                          # Vercel KV 클라이언트
    └── types/                        # 공통 타입
```

### 슬라이스 의존 규칙

```
app → pages → widgets → features → entities → shared
```

- 같은 레이어 간 import 금지 (shared 제외)
- 하위 레이어에서 상위 레이어 import 금지
- ESLint `import/no-restricted-paths` 규칙으로 강제

---

## 6. 콘텐츠 관리 (Velite)

### 파일 구조

```
content/
├── posts/
│   ├── getting-started.mdx
│   └── react-compiler-deep-dive.mdx
└── books/
    ├── atomic-habits.mdx             # 독후감 있는 책
    └── data.json                     # 독후감 없는 책 메타데이터
```

### 스키마 예시

```ts
// velite.config.ts
const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.mdx",
  schema: s.object({
    title: s.string(),
    date: s.isodate(),
    category: s.enum(["개발", "회고", "기록", "경제"]),
    tags: s.array(s.string()).default([]),
    summary: s.string(),
    draft: s.boolean().default(false),
    slug: s.path(),
    readingTime: s.number(), // computed
    toc: s.toc(), // computed
  }),
});

const books = defineCollection({
  name: "Book",
  pattern: "books/**/*.mdx",
  schema: s.object({
    title: s.string(),
    author: s.string(),
    finishedAt: s.isodate(),
    rating: s.number().min(1).max(5),
    coverImage: s.string(),
    hasReview: s.boolean().default(true),
    slug: s.path(),
  }),
});
```

---

## 7. 기능 요구사항

### P0 (필수)

| 기능                  | 설명                                                   |
| --------------------- | ------------------------------------------------------ |
| 블로그 글 목록 + 상세 | MDX 렌더링, 카테고리/태그 필터                         |
| 카테고리              | 개발, 회고, 기록, 경제 (확장 가능)                     |
| 다크/라이트 모드      | 시스템 연동 + 수동 토글, vanilla-extract `createTheme` |
| 반응형                | 모바일 우선                                            |
| SEO                   | OG 태그, 동적 OG 이미지, sitemap, robots.txt           |
| RSS                   | `/feed.xml`                                            |
| 조회수                | Vercel KV + API Routes                                 |
| 읽은 책 목록          | 표지, 별점, 완독일                                     |
| 독후감 페이지         | 독후감 있는 책만 진입 가능                             |
| 포트폴리오            | 프로젝트 카드                                          |
| 이력서                | PDF 다운로드                                           |

### P1 (권장)

| 기능             | 설명                                 |
| ---------------- | ------------------------------------ |
| 클라이언트 검색  | Fuse.js 기반 퍼지 검색               |
| TOC              | 글 상세 우측 목차, 스크롤 하이라이트 |
| 공유             | 링크 복사, 트위터                    |
| 코드 복사 버튼   | MDX 코드 블록                        |
| Vercel Analytics | 방문자 분석 (대시보드용)             |

### Out of Scope

- 댓글 시스템
- 인증 / 관리자 페이지
- 뉴스레터

---

## 8. 비기능 요구사항

| 항목                   | 목표                       |
| ---------------------- | -------------------------- |
| Lighthouse Performance | ≥ 95                       |
| LCP                    | < 1.5s                     |
| CLS                    | < 0.05                     |
| 빌드 산출물            | Vercel serverless + static |
| 브라우저 지원          | Evergreen 최신 2버전       |
| 접근성                 | WCAG 2.1 AA                |

---

## 9. 결정된 사항 요약

| 항목           | 결정                            |
| -------------- | ------------------------------- |
| Framework      | Next.js 15 + React 19           |
| React Compiler | 활성화 (실험적)                 |
| CSS            | vanilla-extract + Sprinkles     |
| Headless UI    | Radix UI                        |
| 콘텐츠         | Velite (MDX)                    |
| 조회수         | Vercel KV + API Routes          |
| 분석           | Vercel Analytics                |
| 검색           | Fuse.js (클라이언트)            |
| 상태           | Jotai                           |
| 배포           | Vercel                          |
| URL 구조       | `/blog/[slug]`, `/books/[slug]` |

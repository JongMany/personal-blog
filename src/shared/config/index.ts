export type { Sprinkles } from "./sprinkles.css";
export { sprinkles } from "./sprinkles.css";
export { darkTheme, lightTheme, vars } from "./theme.css";

export const siteConfig = {
  name: "Blog",
  description: "개발 경험, 생각, 포트폴리오를 담는 개인 웹사이트",
  url: "https://yourdomain.com",
  author: {
    name: "Your Name",
    email: "your@email.com",
    github: "https://github.com/yourusername",
  },
  categories: ["개발", "회고", "기록", "경제"] as const,
} as const;

export type Category = (typeof siteConfig.categories)[number];

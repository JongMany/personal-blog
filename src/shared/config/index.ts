export type { Sprinkles } from "./sprinkles.css";
export { sprinkles } from "./sprinkles.css";
export { darkTheme, lightTheme, vars } from "./theme.css";

export const siteConfig = {
  name: "Blog",
  description: "개발 경험, 생각, 포트폴리오를 담는 개인 웹사이트",
  url: "https://yourdomain.com",
  author: {
    name: "이종민",
    email: "blackberry11191919@gmail.com",
    github: "https://github.com/JongMany",
    linkedin: "https://www.linkedin.com/in/%EC%A2%85%EB%AF%BC-%EC%9D%B4-557572284/",
  },
  categories: ["개발", "회고", "기록", "경제"] as const,
} as const;

export type Category = (typeof siteConfig.categories)[number];

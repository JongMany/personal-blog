import "@/shared/config/global.css";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { darkTheme, lightTheme, siteConfig } from "@/shared/config";

import * as styles from "./layout.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `(function(){
  try {
    var saved = localStorage.getItem('theme');
    var dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = saved === 'dark' || (!saved && dark);
    document.documentElement.classList.add(isDark ? '${darkTheme}' : '${lightTheme}');
  } catch(e) {}
})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

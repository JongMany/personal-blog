"use client";

import { useEffect, useRef, useState } from "react";

import { PostCard } from "@/widgets/post-card";

import * as styles from "./BlogListView.css";
import { SubTabs } from "./SubTabs";

interface Post {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  readingTime: number;
}

interface Props {
  posts: Post[];
}

const BREAKPOINT = 590;
const LIST_FADE = 160;
const NAV_FADE = 150;

export function BlogListView({ posts }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [displayed, setDisplayed] = useState<string | null>(null);
  const [listExiting, setListExiting] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= BREAKPOINT;
  });
  const [navOpacity, setNavOpacity] = useState(1);

  const navRef = useRef<HTMLElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const listTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevMobileRef = useRef(typeof window !== "undefined" && window.innerWidth <= BREAKPOINT);

  const categories = [...new Set(posts.map((p) => p.category))].sort();
  const filtered = displayed ? posts.filter((p) => p.category === displayed) : posts;

  // 브레이크포인트 crossing 감지 → nav fade 처리
  useEffect(() => {
    const handler = () => {
      const mobile = window.innerWidth <= BREAKPOINT;
      if (mobile === prevMobileRef.current) return;
      prevMobileRef.current = mobile;

      if (navTimerRef.current) clearTimeout(navTimerRef.current);

      setNavOpacity(0);
      navTimerRef.current = setTimeout(() => {
        setIsMobile(mobile);
        requestAnimationFrame(() => requestAnimationFrame(() => setNavOpacity(1)));
      }, NAV_FADE);
    };

    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
      if (navTimerRef.current) clearTimeout(navTimerRef.current);
    };
  }, []);

  // 카테고리 선택 시 모바일 인디케이터 위치 업데이트
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const activeBtn = nav.querySelector<HTMLElement>("[data-active='true']");
    if (!activeBtn) return;
    setIndicator({ left: activeBtn.offsetLeft, width: activeBtn.offsetWidth });
  }, [selected]);

  useEffect(
    () => () => {
      if (listTimerRef.current) clearTimeout(listTimerRef.current);
    },
    []
  );

  const handleSelect = (cat: string | null) => {
    if (cat === selected) return;
    setSelected(cat);
    setListExiting(true);
    listTimerRef.current = setTimeout(() => {
      setDisplayed(cat);
      setListExiting(false);
    }, LIST_FADE);
  };

  return (
    <div className={styles.wrapper}>
      <SubTabs active="blog" />
      <header className={styles.header}>
        <h1 className={styles.title}>블로그</h1>
        <p className={styles.count}>총 {posts.length}편</p>
      </header>

      <div className={`${styles.body} ${isMobile ? styles.bodyMobile : ""}`}>
        <div className={`${styles.list} ${listExiting ? styles.listExiting : ""}`}>
          {filtered.length === 0 ? (
            <p className={styles.empty}>아직 작성된 글이 없어요.</p>
          ) : (
            filtered.map((post) => (
              <PostCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                summary={post.summary}
                date={post.date}
                category={post.category}
                readingTime={post.readingTime}
              />
            ))
          )}
        </div>

        {categories.length > 0 && (
          <nav
            ref={navRef}
            className={`${styles.sidebar} ${isMobile ? styles.sidebarMobile : ""}`}
            style={{ opacity: navOpacity, transition: `opacity ${NAV_FADE}ms ease` }}
          >
            <span
              className={styles.indicator}
              style={{
                left: indicator.left,
                width: indicator.width,
                display: isMobile ? undefined : "none",
              }}
            />
            <button
              data-active={selected === null}
              className={`${styles.categoryBtn} ${selected === null ? styles.categoryBtnActive : ""}`}
              onClick={() => handleSelect(null)}
            >
              전체
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                data-active={selected === cat}
                className={`${styles.categoryBtn} ${selected === cat ? styles.categoryBtnActive : ""}`}
                onClick={() => handleSelect(cat)}
              >
                {cat}
              </button>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}

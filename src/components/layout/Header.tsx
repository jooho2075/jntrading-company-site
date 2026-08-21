"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLocale } from "@/lib/locale/LocaleContext";
import { dictionary } from "@/lib/locale/translations";

type NavId = keyof typeof dictionary.header.nav;

type NavItem = {
  id: NavId;
  href?: string;
};

// TODO: 아래 페이지들이 아직 만들어지지 않아 404가 발생하므로,
// 페이지가 준비될 때까지 href를 주석 처리하고 클릭해도 이동하지 않도록 처리함.
const NAV_ITEMS: NavItem[] = [
  { id: "home", href: "/" },
  { id: "about", href: /* "/about" */ undefined },
  { id: "business", href: /* "/business" */ undefined },
  { id: "products", href: /* "/products" */ undefined },
  { id: "sourcing", href: /* "/sourcing" */ undefined },
  { id: "contact", href: /* "/contact" */ undefined },
];

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c2.5 2.5 3.5 5.7 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.7-3.5-9s1-6.5 3.5-9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const { locale, setLocale } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  // 아직 페이지가 없는 메뉴를 클릭했을 때도 Home처럼 밑줄/색상이 바뀌도록
  // 실제 라우팅과 별개로 "선택된 메뉴"만 로컬로 추적한다.
  const [clickedId, setClickedId] = useState<string | null>(null);

  // 실제 페이지 이동(pathname 변경)이 일어나면 클릭 상태를 초기화해
  // 현재 경로 기준의 활성 표시로 되돌린다. (렌더 중 상태 조정 패턴)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setClickedId(null);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="JN TRADING CO., LTD. 로고"
            width={218}
            height={184}
            priority
            className="h-9 w-auto"
          />
          <span className="text-lg font-extrabold tracking-tight text-[#1e2a6e]">
            JN TRADING CO., LTD.
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => {
            const label = dictionary.header.nav[item.id][locale];
            const isActive =
              item.href === undefined
                ? clickedId === item.id
                : clickedId === null &&
                  (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href));

            const linkClassName = `relative py-1 text-sm font-medium transition-colors ${
              isActive ? "text-[#1e2a6e]" : "text-slate-700 hover:text-[#1e2a6e]"
            }`;

            if (item.href === undefined) {
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setClickedId(item.id)}
                  className={linkClassName}
                >
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-[1px] left-0 h-0.5 w-full bg-[#1e2a6e]" />
                  )}
                </button>
              );
            }

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setClickedId(null)}
                className={linkClassName}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-[1px] left-0 h-0.5 w-full bg-[#1e2a6e]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 sm:flex">
            <GlobeIcon />
            <button
              type="button"
              onClick={() => setLocale("ko")}
              className={locale === "ko" ? "text-[#1e2a6e]" : "text-slate-500"}
            >
              한국어
            </button>
            <span className="text-slate-300">|</span>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={locale === "en" ? "text-[#1e2a6e]" : "text-slate-500"}
            >
              English
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-slate-700 lg:hidden"
            aria-label={dictionary.header.menuOpenLabel[locale]}
            aria-expanded={menuOpen}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-100 bg-white px-4 pb-4 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const label = dictionary.header.nav[item.id][locale];
              const isActive =
                item.href === undefined
                  ? clickedId === item.id
                  : clickedId === null &&
                    (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href));

              const itemClassName = `block w-full rounded-md px-3 py-2 text-left text-sm font-medium ${
                isActive ? "bg-slate-50 text-[#1e2a6e]" : "text-slate-700 hover:bg-slate-50"
              }`;

              if (item.href === undefined) {
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setClickedId(item.id);
                        setMenuOpen(false);
                      }}
                      className={itemClassName}
                    >
                      {label}
                    </button>
                  </li>
                );
              }

              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      setClickedId(null);
                      setMenuOpen(false);
                    }}
                    className={itemClassName}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}

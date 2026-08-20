"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "회사소개", href: "/about" },
  { label: "사업분야", href: "/business" },
  { label: "취급제품", href: "/products" },
  { label: "글로벌 소싱", href: "/sourcing" },
  { label: "문의하기", href: "/contact" },
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [locale, setLocale] = useState<"ko" | "en">("ko");

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
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#1e2a6e]"
                    : "text-slate-700 hover:text-[#1e2a6e]"
                }`}
              >
                {item.label}
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
            aria-label="메뉴 열기"
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
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm font-medium ${
                      isActive
                        ? "bg-slate-50 text-[#1e2a6e]"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
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

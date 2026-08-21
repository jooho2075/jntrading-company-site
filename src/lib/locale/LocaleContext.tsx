"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "ko" | "en";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  // URL을 직접 입력해 들어오거나 새로고침하면 항상 한국어("ko")로 시작한다.
  // 언어 선택을 localStorage 등에 저장하지 않으므로, 브라우징 도중 토글로
  // 바꾼 언어는 같은 페이지 세션 안에서만 유지된다.
  const [locale, setLocale] = useState<Locale>("ko");

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}

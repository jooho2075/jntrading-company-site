"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";

export type Locale = "ko" | "en";

const STORAGE_KEY = "jn-trading-locale";

type Listener = () => void;

// localStorage(브라우저 전용 외부 저장소)와 React 상태를 동기화하기 위해
// useSyncExternalStore를 사용한다. useEffect 안에서 setState를 호출하는
// 방식은 불필요한 리렌더를 유발할 수 있어 지양한다.
const listeners = new Set<Listener>();
let currentLocale: Locale = "ko";
let hydratedFromStorage = false;

function hydrateFromStorage() {
  if (hydratedFromStorage || typeof window === "undefined") return;
  hydratedFromStorage = true;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ko") {
      currentLocale = stored;
    }
  } catch {
    // localStorage를 쓸 수 없는 환경(프라이빗 모드 등)에서는 조용히 무시
  }
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Locale {
  hydrateFromStorage();
  return currentLocale;
}

// 서버 렌더링에서는 항상 "ko" 스냅샷을 반환해 클라이언트 첫 렌더와 일치시킨다.
function getServerSnapshot(): Locale {
  return "ko";
}

function setStoredLocale(next: Locale) {
  currentLocale = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // localStorage를 쓸 수 없는 환경(프라이빗 모드 등)에서는 조용히 무시
  }
  listeners.forEach((listener) => listener());
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <LocaleContext.Provider value={{ locale, setLocale: setStoredLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}

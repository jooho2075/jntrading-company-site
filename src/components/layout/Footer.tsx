"use client";

import { useLocale } from "@/lib/locale/LocaleContext";
import { dictionary } from "@/lib/locale/translations";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <path
        d="M6.6 3.5 9 5.9c.4.4.4 1.1 0 1.6L7.6 9c1 2.6 3.2 4.8 5.8 5.8l1.5-1.4c.4-.4 1.1-.4 1.6 0l2.4 2.4c.4.4.4 1.1 0 1.6l-1.3 1.3c-.5.5-1.2.7-1.9.6-4-.6-8-4.6-8.6-8.6-.1-.7.1-1.4.6-1.9L6.6 3.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FaxIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <path
        d="M6 8V4h9l3 3v1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="3" y="8" width="18" height="8" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="6" y="16" width="9" height="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="11" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <path
        d="M12 21s-6.5-5.9-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.1-6.5 11-6.5 11Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const { locale } = useLocale();

  return (
    <footer className="bg-[#0f1b4d] text-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-[11px] sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 lg:px-8">
        {/* 가로 스크롤 없이, 글자 크기/간격을 살짝 줄여서 데스크톱 폭에서는
            한 줄에 다 들어가도록 하고, 화면이 좁을 때만 자연스럽게 줄바꿈된다. */}
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          <li className="flex items-center gap-1.5">
            <MailIcon />
            <a href="mailto:info@jntrading.co.kr" className="whitespace-nowrap hover:text-white">
              jskim_jnt@naver.com
            </a>
          </li>
          <li className="flex items-center gap-1.5">
            <PhoneIcon />
            <a href="tel:+82-10-7684-1182" className="whitespace-nowrap hover:text-white">
              {dictionary.footer.phone[locale]}
            </a>
          </li>
          <li className="flex items-center gap-1.5">
            <PinIcon />
            <span className="whitespace-nowrap">{dictionary.footer.address[locale]}</span>
          </li>
          <li className="flex items-center gap-1.5">
            <FaxIcon />
            <span className="whitespace-nowrap">{dictionary.footer.fax[locale]}</span>
          </li>
        </ul>

        <p className="whitespace-nowrap text-slate-400">
          © {year} JN TRADING CO., LTD. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

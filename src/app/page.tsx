import Link from "next/link";
import Image from "next/image";

const CATEGORIES = [
  {
    title: "산업기계 / 베어링류",
    blurb: "정밀 기계 및 산업용 베어링 부품",
    description:
      "다양한 산업 분야에 필요한 정밀 기계 및 산업용 베어링 부품을 공급합니다.",
    href: "/business/bearing",
    swatch: "bg-slate-200",
    icon: <GearIcon />,
  },
  {
    title: "의료기기",
    blurb: "신뢰할 수 있는 의료기기 및 헬스케어 제품",
    description:
      "의료 현장에서 신뢰받는 품질의 의료기기 및 헬스케어 제품을 제공합니다.",
    href: "/business/medical",
    swatch: "bg-sky-100",
    icon: <MedicalIcon />,
  },
  {
    title: "한국산 칩스류",
    blurb: "고품질 한국산 스낵 제품 (칩스, 과자류 등)",
    description:
      "한국의 우수한 품질을 자랑하는 스낵 제품을 해외 시장에 공급합니다.",
    href: "/business/snacks",
    swatch: "bg-amber-100",
    icon: <ChipIcon />,
  },
  {
    title: "해외 유기농 비누",
    blurb: "자연에서 온 친환경 유기농 비누 제품",
    description:
      "자연 친화적이고 안전한 유기농 비누 제품을 글로벌 시장에 소개합니다.",
    href: "/business/soap",
    swatch: "bg-emerald-100",
    icon: <LeafIcon />,
  },
];

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6M18.4 18.4l-1.6-1.6M7.2 7.2 5.6 5.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MedicalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <rect x="3" y="5" width="18" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 9v6M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChipIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7 4v2M12 4v2M17 4v2M7 18v2M12 18v2M17 18v2M4 7h2M4 12h2M4 17h2M18 7h2M18 12h2M18 17h2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M5 19c0-5 2-8 6-10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/home_image1.png"
          alt="산업기계 베어링, 의료기기, 한국산 스낵, 유기농 비누 등 JN TRADING이 소싱하는 제품 이미지"
          width={4250}
          height={992}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <h1 className="text-3xl font-extrabold leading-tight text-[#1e2a6e] sm:text-4xl lg:text-5xl">
                Global Trading &
                <br />
                Sourcing Partner
              </h1>
              <p className="mt-4 text-sm text-slate-700 sm:text-base">
                JN TRADING CO., LTD.는 신뢰할 수 있는 제조사 및
                <br />
                파트너와 함께 전 세계 시장을 연결합니다.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#1e2a6e] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#16215a]"
              >
                문의하기
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-[#f5f8fd] py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:flex lg:items-start lg:justify-between lg:gap-6 lg:px-8">
          {CATEGORIES.map((category) => (
            <div key={category.title} className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#1e2a6e] text-[#1e2a6e]">
                {category.icon}
              </span>
              <div>
                <p className="font-bold text-[#1e2a6e] lg:whitespace-nowrap">{category.title}</p>
                <p className="mt-1 text-sm text-slate-500 lg:whitespace-nowrap lg:text-xs">
                  {category.blurb}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {CATEGORIES.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group overflow-hidden rounded-xl border border-slate-100 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className={`flex h-40 items-center justify-center ${category.swatch} text-[#1e2a6e]/60`}>
                <span className="h-12 w-12 [&>svg]:h-full [&>svg]:w-full">
                  {category.icon}
                </span>
              </div>
              <div className="p-4">
                <p className="font-bold text-[#1e2a6e]">{category.title}</p>
                <p className="mt-1 text-sm text-slate-500">{category.description}</p>
                <span className="mt-3 inline-block text-[#1e2a6e] transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

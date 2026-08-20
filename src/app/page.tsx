import Link from "next/link";
import Image from "next/image";
import { Cog, Cookie, Globe, Handshake, Leaf, Stethoscope, Truck } from "lucide-react";

const CATEGORIES = [
  {
    title: "산업기계 / 베어링류",
    blurb: "정밀 기계 및 산업용 베어링 부품",
    description:
      "다양한 산업 분야에 필요한 정밀 기계 및 산업용 베어링 부품을 공급합니다.",
    href: "/business/bearing",
    image: "/images/industry.png",
    imageWidth: 594,
    imageHeight: 188,
    icon: <Cog className="h-6 w-6" strokeWidth={1.5} />,
  },
  {
    title: "의료기기",
    blurb: "신뢰할 수 있는 의료기기 및 헬스케어 제품",
    description:
      "의료 현장에서 신뢰받는 품질의 의료기기 및 헬스케어 제품을 제공합니다.",
    href: "/business/medical",
    image: "/images/medical.png",
    imageWidth: 650,
    imageHeight: 194,
    icon: <Stethoscope className="h-6 w-6" strokeWidth={1.5} />,
  },
  {
    title: "한국산 칩스류",
    blurb: "고품질 한국산 스낵 제품 (칩스, 과자류 등)",
    description:
      "한국의 우수한 품질을 자랑하는 스낵 제품을 해외 시장에 공급합니다.",
    href: "/business/snacks",
    image: "/images/kor_chips.png",
    imageWidth: 642,
    imageHeight: 186,
    icon: <Cookie className="h-6 w-6" strokeWidth={1.5} />,
  },
  {
    title: "해외 유기농 비누",
    blurb: "자연에서 온 친환경 유기농 비누 제품",
    description:
      "자연 친화적이고 안전한 유기농 비누 제품을 글로벌 시장에 소개합니다.",
    href: "/business/soap",
    image: "/images/organic_soap.png",
    imageWidth: 630,
    imageHeight: 186,
    icon: <Leaf className="h-6 w-6" strokeWidth={1.5} />,
  },
];

const SOURCING_POINTS = [
  {
    title: "글로벌 네트워크",
    description: "아시아 · 유럽 · 미주 등",
    icon: <Globe className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "신뢰와 협력",
    description: "장기적 파트너십 구축",
    icon: <Handshake className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "안정적 공급",
    description: "신속하고 정확한 물류",
    icon: <Truck className="h-5 w-5" strokeWidth={1.5} />,
  },
];

function HeroCopy({ compact }: { compact?: boolean }) {
  return (
    <div className="max-w-xl">
      <h1
        className={
          compact
            ? "text-xl font-extrabold leading-tight text-[#1e2a6e] sm:text-2xl"
            : "text-4xl font-extrabold leading-tight text-[#1e2a6e] lg:text-5xl"
        }
      >
        Global Trading &
        <br />
        Sourcing Partner
      </h1>
      <p className={compact ? "mt-2 text-xs text-slate-700 sm:text-sm" : "mt-4 text-base text-slate-700"}>
        JN TRADING CO., LTD.는 신뢰할 수 있는 제조사 및
        <br />
        파트너와 함께 전 세계 시장을 연결합니다.
      </p>
      <Link
        href="/contact"
        className={
          compact
            ? "mt-3 inline-flex items-center gap-2 rounded-md bg-[#1e2a6e] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#16215a] sm:text-sm"
            : "mt-6 inline-flex items-center gap-2 rounded-md bg-[#1e2a6e] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#16215a]"
        }
      >
        문의하기
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        {/* Below lg: fixed-height banner so the overlaid text always has room to fit,
            regardless of window width. The image crops (object-cover) to fill it. */}
        <div className="relative h-[220px] sm:h-[260px] lg:hidden">
          <Image
            src="/images/home_image1.png"
            alt="산업기계 베어링, 의료기기, 한국산 스낵, 유기농 비누 등 JN TRADING이 소싱하는 제품 이미지"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
              <HeroCopy compact />
            </div>
          </div>
        </div>

        {/* lg and up: full, uncropped image at its natural aspect ratio — plenty tall
            enough at these widths for the text to sit comfortably on top of it. */}
        <div className="relative hidden lg:block">
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
            <div className="mx-auto w-full max-w-7xl px-8">
              <HeroCopy />
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
              <div className="flex items-center justify-center bg-slate-100">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={category.imageWidth}
                  height={category.imageHeight}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full"
                />
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

      <section className="pb-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col gap-6 rounded-2xl bg-[#eef4fc] p-8 sm:flex-row sm:items-center">
            <Handshake className="h-16 w-16 shrink-0 text-[#1e2a6e]" strokeWidth={1.5} />
            <div>
              <h2 className="text-xl font-extrabold text-[#1e2a6e] sm:text-2xl">
                About JN TRADING CO., LTD.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                JN TRADING CO., LTD.는 한국을 기반으로 글로벌 시장을 대상으로
                산업기계, 산업장비, 의료기기 및 소비재(칩스류, 유기농 비누 등)를
                소싱·유통하는 무역 전문 기업입니다.
                <br />
                <br />
                신뢰할 수 있는 제조사 및 비즈니스 파트너와의 협력을 통해
                고객의 요구에 맞는 우수한 제품을 글로벌 시장에 제공합니다.
              </p>
              <Link
                href="/about"
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#1e2a6e] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#16215a]"
              >
                회사소개 더보기
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-[#eef4fc] p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <Globe className="h-16 w-16 shrink-0 text-[#1e2a6e]" strokeWidth={1.5} />
              <div>
                <h2 className="text-xl font-extrabold text-[#1e2a6e] sm:text-2xl">
                  Global Sourcing
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  전 세계 우수 제조사와의 네트워크를 바탕으로 고객이 필요로
                  하는 제품을 맞춤형으로 소싱하고, 안정적인 공급과
                  파트너십을 제공합니다.
                </p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {SOURCING_POINTS.map((point) => (
                <div key={point.title} className="flex flex-col items-center text-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1e2a6e]">
                    {point.icon}
                  </span>
                  <p className="mt-2 text-sm font-bold text-[#1e2a6e]">{point.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

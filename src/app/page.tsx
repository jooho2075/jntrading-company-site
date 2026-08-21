"use client";

import Link from "next/link";
import Image from "next/image";
import { Cog, Cookie, Globe, Handshake, Leaf, Stethoscope, Truck } from "lucide-react";
import { useLocale } from "@/lib/locale/LocaleContext";
import { dictionary } from "@/lib/locale/translations";

type CategoryId = keyof typeof dictionary.home.categories;

// TODO: 아래 4개 카테고리의 상세 페이지가 아직 만들어지지 않아 404가 발생하므로,
// 페이지가 준비될 때까지 href를 주석 처리하고 클릭해도 이동하지 않도록 처리함.
const CATEGORIES: {
  id: CategoryId;
  href?: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  icon: React.ReactNode;
}[] = [
  {
    id: "bearing",
    href: /* "/business/bearing" */ undefined,
    image: "/images/industry.png",
    imageWidth: 594,
    imageHeight: 188,
    icon: <Cog className="h-6 w-6" strokeWidth={1.5} />,
  },
  {
    id: "medical",
    href: /* "/business/medical" */ undefined,
    image: "/images/medical.png",
    imageWidth: 650,
    imageHeight: 194,
    icon: <Stethoscope className="h-6 w-6" strokeWidth={1.5} />,
  },
  {
    id: "snacks",
    href: /* "/business/snacks" */ undefined,
    image: "/images/kor_chips.png",
    imageWidth: 642,
    imageHeight: 186,
    icon: <Cookie className="h-6 w-6" strokeWidth={1.5} />,
  },
  {
    id: "soap",
    href: /* "/business/soap" */ undefined,
    image: "/images/organic_soap.png",
    imageWidth: 630,
    imageHeight: 186,
    icon: <Leaf className="h-6 w-6" strokeWidth={1.5} />,
  },
];

type SourcingPointId = keyof typeof dictionary.home.sourcing.points;

const SOURCING_POINTS: { id: SourcingPointId; icon: React.ReactNode }[] = [
  { id: "network", icon: <Globe className="h-5 w-5" strokeWidth={1.5} /> },
  { id: "trust", icon: <Handshake className="h-5 w-5" strokeWidth={1.5} /> },
  { id: "supply", icon: <Truck className="h-5 w-5" strokeWidth={1.5} /> },
];

function HeroCopy({ compact }: { compact?: boolean }) {
  const { locale } = useLocale();
  const t = dictionary.home.hero;

  return (
    <div className="max-w-xl">
      <h1
        className={
          compact
            ? "text-xl font-extrabold leading-tight text-[#1e2a6e] sm:text-2xl"
            : "text-4xl font-extrabold leading-tight text-[#1e2a6e] lg:text-5xl"
        }
      >
        {t.title1[locale]}
        <br />
        {t.title2[locale]}
      </h1>
      <p className={compact ? "mt-2 text-xs text-slate-700 sm:text-sm" : "mt-4 text-base text-slate-700"}>
        {t.body1[locale]}
        <br />
        {t.body2[locale]}
      </p>
      {/* /contact 페이지가 아직 없어 404가 발생하므로,
          페이지가 준비될 때까지 Link href를 주석 처리하고 버튼으로 대체함. */}
      <button
        type="button"
        className={
          compact
            ? "mt-3 inline-flex items-center gap-2 rounded-md bg-[#1e2a6e] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#16215a] sm:text-sm"
            : "mt-6 inline-flex items-center gap-2 rounded-md bg-[#1e2a6e] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#16215a]"
        }
        // href="/contact"
      >
        {t.cta[locale]}
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}

export default function Home() {
  const { locale } = useLocale();
  const heroAlt = dictionary.home.heroAlt[locale];
  const about = dictionary.home.about;
  const sourcing = dictionary.home.sourcing;

  return (
    <div>
      <section className="relative isolate overflow-hidden">
        {/* Below lg: fixed-height banner so the overlaid text always has room to fit,
            regardless of window width. The image crops (object-cover) to fill it. */}
        <div className="relative h-[220px] sm:h-[260px] lg:hidden">
          <Image
            src="/images/home_image1.png"
            alt={heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-left"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
              <div className="inline-block max-w-xl rounded-lg bg-white/85 p-2.5 backdrop-blur-sm">
                <HeroCopy compact />
              </div>
            </div>
          </div>
        </div>

        {/* lg and up: full, uncropped image at its natural aspect ratio — plenty tall
            enough at these widths for the text to sit comfortably on top of it. */}
        <div className="relative hidden lg:block">
          <Image
            src="/images/home_image1.png"
            alt={heroAlt}
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
          {CATEGORIES.map((category) => {
            const text = dictionary.home.categories[category.id];
            return (
              <div key={category.id} className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#1e2a6e] text-[#1e2a6e]">
                  {category.icon}
                </span>
                <div>
                  <p className="font-bold text-[#1e2a6e] lg:whitespace-nowrap">{text.title[locale]}</p>
                  <p className="mt-1 text-sm text-slate-500 lg:whitespace-nowrap lg:text-xs">
                    {text.blurb[locale]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {CATEGORIES.map((category) => {
            const text = dictionary.home.categories[category.id];
            const cardClassName =
              "group overflow-hidden rounded-xl border border-slate-100 shadow-sm transition-shadow hover:shadow-md";
            const cardContent = (
              <>
                <div className="flex items-center justify-center bg-slate-100">
                  <Image
                    src={category.image}
                    alt={text.title[locale]}
                    width={category.imageWidth}
                    height={category.imageHeight}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="h-auto w-full"
                  />
                </div>
                <div className="p-4">
                  <p className="font-bold text-[#1e2a6e]">{text.title[locale]}</p>
                  <p className="mt-1 text-sm text-slate-500">{text.description[locale]}</p>
                  <span className="mt-3 inline-block text-[#1e2a6e] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </>
            );

            // 상세 페이지가 준비되기 전까지는 href가 없으므로 링크 대신
            // 클릭해도 이동하지 않는 div로 렌더링한다.
            if (category.href === undefined) {
              return (
                <div key={category.id} className={cardClassName}>
                  {cardContent}
                </div>
              );
            }

            return (
              <Link key={category.id} href={category.href} className={cardClassName}>
                {cardContent}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col gap-6 rounded-2xl bg-[#eef4fc] p-8 sm:flex-row sm:items-center">
            <Handshake className="h-16 w-16 shrink-0 text-[#1e2a6e]" strokeWidth={1.5} />
            <div>
              <h2 className="text-xl font-extrabold text-[#1e2a6e] sm:text-2xl">
                {about.heading[locale]}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {about.body1[locale]}
                <br />
                <br />
                {about.body2[locale]}
              </p>
              {/* /about 페이지가 아직 없어 404가 발생하므로,
                  페이지가 준비될 때까지 Link href를 주석 처리하고 버튼으로 대체함. */}
              <button
                type="button"
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#1e2a6e] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#16215a]"
                // href="/about"
              >
                {about.cta[locale]}
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-[#eef4fc] p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <Globe className="h-16 w-16 shrink-0 text-[#1e2a6e]" strokeWidth={1.5} />
              <div>
                <h2 className="text-xl font-extrabold text-[#1e2a6e] sm:text-2xl">
                  {sourcing.heading[locale]}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{sourcing.body[locale]}</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {SOURCING_POINTS.map((point) => {
                const text = sourcing.points[point.id];
                return (
                  <div key={point.id} className="flex flex-col items-center text-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1e2a6e]">
                      {point.icon}
                    </span>
                    <p className="mt-2 text-sm font-bold text-[#1e2a6e]">{text.title[locale]}</p>
                    <p className="mt-1 text-xs text-slate-500">{text.description[locale]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

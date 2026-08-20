import Image from "next/image";
import Link from "next/link";

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
    </div>
  );
}

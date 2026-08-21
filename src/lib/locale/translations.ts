import type { Locale } from "./LocaleContext";

export type Localized = Record<Locale, string>;

export const dictionary = {
  header: {
    nav: {
      home: { ko: "Home", en: "Home" },
      about: { ko: "회사소개", en: "About Us" },
      business: { ko: "사업분야", en: "Business" },
      products: { ko: "취급제품", en: "Products" },
      sourcing: { ko: "글로벌 소싱", en: "Global Sourcing" },
      contact: { ko: "문의하기", en: "Contact Us" },
    },
    menuOpenLabel: { ko: "메뉴 열기", en: "Open menu" },
  },
  footer: {
    address: {
      ko: "경기도 부천시 도약로 261, A동 1201호(도당동, 부천대우테크노파크) 14523",
      en: "A-1201, 261 Doyak-ro, Bucheon-si, Gyeonggi-do, 14523, Korea",
    },
    // 한국어에서는 국내에서 통용되는 표기(0으로 시작)를, 영어에서는 해외 발신자를 위해
    // 국가번호(+82)를 붙이고 지역번호 앞자리 0을 뗀 국제 표기를 사용한다.
    phone: { ko: "010-7684-1182 | 032-670-8284", en: "+82-10-7684-1182 | +82-32-670-8284" },
    fax: { ko: "FAX 032-670-8984", en: "FAX +82-32-670-8984" },
  },
  home: {
    heroAlt: {
      ko: "산업기계 베어링, 의료기기, 한국산 스낵, 유기농 비누 등 JN TRADING이 소싱하는 제품 이미지",
      en: "Product imagery for industrial bearings, medical devices, Korean snacks, and organic soap sourced by JN TRADING",
    },
    hero: {
      title1: { ko: "글로벌 무역 &", en: "Global Trading &" },
      title2: { ko: "소싱 파트너", en: "Sourcing Partner" },
      body1: { ko: "JN TRADING CO., LTD.는 신뢰할 수 있는 제조사 및", en: "JN TRADING CO., LTD. connects global markets" },
      body2: { ko: "파트너와 함께 전 세계 시장을 연결합니다.", en: "together with trusted manufacturers and partners." },
      cta: { ko: "문의하기", en: "Contact Us" },
    },
    categories: {
      bearing: {
        title: { ko: "산업기계 / 베어링류", en: "Industrial Machinery / Bearings" },
        blurb: { ko: "정밀 기계 및 산업용 베어링 부품", en: "Precision machinery and industrial bearing parts" },
        description: {
          ko: "다양한 산업 분야에 필요한 정밀 기계 및 산업용 베어링 부품을 공급합니다.",
          en: "We supply precision machinery and industrial bearing parts required across a wide range of industries.",
        },
      },
      medical: {
        title: { ko: "의료기기", en: "Medical Devices" },
        blurb: { ko: "신뢰할 수 있는 의료기기 및 헬스케어 제품", en: "Trusted medical devices and healthcare products" },
        description: {
          ko: "의료 현장에서 신뢰받는 품질의 의료기기 및 헬스케어 제품을 제공합니다.",
          en: "We provide medical devices and healthcare products trusted for their quality in clinical settings.",
        },
      },
      snacks: {
        title: { ko: "한국산 칩스류", en: "Korean Chips & Snacks" },
        blurb: {
          ko: "고품질 한국산 스낵 제품 (칩스, 과자류 등)",
          en: "High-quality Korean snack products (chips, confectionery, etc.)",
        },
        description: {
          ko: "한국의 우수한 품질을 자랑하는 스낵 제품을 해외 시장에 공급합니다.",
          en: "We supply snack products renowned for Korea's excellent quality to overseas markets.",
        },
      },
      soap: {
        title: { ko: "해외 유기농 비누", en: "Overseas Organic Soap" },
        blurb: { ko: "자연에서 온 친환경 유기농 비누 제품", en: "Eco-friendly organic soap products from nature" },
        description: {
          ko: "자연 친화적이고 안전한 유기농 비누 제품을 글로벌 시장에 소개합니다.",
          en: "We introduce nature-friendly and safe organic soap products to the global market.",
        },
      },
    },
    about: {
      heading: { ko: "JN TRADING CO., LTD. 소개", en: "About JN TRADING CO., LTD." },
      body1: {
        ko: "JN TRADING CO., LTD.는 한국을 기반으로 글로벌 시장을 대상으로 산업기계, 산업장비, 의료기기 및 소비재(칩스류, 유기농 비누 등)를 소싱·유통하는 무역 전문 기업입니다.",
        en: "JN TRADING CO., LTD. is a Korea-based trading company that sources and distributes industrial machinery, equipment, medical devices, and consumer goods (snacks, organic soap, and more) for the global market.",
      },
      body2: {
        ko: "신뢰할 수 있는 제조사 및 비즈니스 파트너와의 협력을 통해 고객의 요구에 맞는 우수한 제품을 글로벌 시장에 제공합니다.",
        en: "Through collaboration with trusted manufacturers and business partners, we deliver excellent products tailored to our customers' needs to the global market.",
      },
      cta: { ko: "회사소개 더보기", en: "Learn More About Us" },
    },
    sourcing: {
      heading: { ko: "글로벌 소싱", en: "Global Sourcing" },
      body: {
        ko: "전 세계 우수 제조사와의 네트워크를 바탕으로 고객이 필요로 하는 제품을 맞춤형으로 소싱하고, 안정적인 공급과 파트너십을 제공합니다.",
        en: "Backed by a network of leading manufacturers worldwide, we source customized products for our clients and provide stable supply and partnership.",
      },
      points: {
        network: {
          title: { ko: "글로벌 네트워크", en: "Global Network" },
          description: { ko: "아시아 · 유럽 · 미주 등", en: "Asia · Europe · Americas & more" },
        },
        trust: {
          title: { ko: "신뢰와 협력", en: "Trust & Cooperation" },
          description: { ko: "장기적 파트너십 구축", en: "Building long-term partnerships" },
        },
        supply: {
          title: { ko: "안정적 공급", en: "Stable Supply" },
          description: { ko: "신속하고 정확한 물류", en: "Fast and accurate logistics" },
        },
      },
    },
  },
} as const;

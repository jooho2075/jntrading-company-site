# JN TRADING CO., LTD. — Company Site

JN TRADING CO., LTD.의 공식 홈페이지입니다. 산업기계/베어링류, 의료기기, 한국산 스낵, 해외 유기농 비누 등을 소싱·유통하는 무역 전문 기업 소개 사이트입니다.

- **운영 사이트**: `jntrading.kr` (DNS 연결 진행 중)
- **임시 배포 주소**: https://jntrading-company-site.vercel.app

## 기술 스택

| 영역 | 사용 기술 | 버전 |
| --- | --- | --- |
| 프레임워크 | [Next.js](https://nextjs.org) (App Router, Turbopack) | 16.3.1 |
| 언어 | TypeScript | ^5 |
| UI 라이브러리 | React / React DOM | 19.2.8 |
| 스타일링 | Tailwind CSS | ^4 |
| 아이콘 | [lucide-react](https://lucide.dev) | ^1.33.0 |
| 백엔드/인증 | [Supabase](https://supabase.com) (`@supabase/ssr`, `@supabase/supabase-js`) | ^0.12.4 / ^2.112.3 |
| 배포 | Vercel | - |

> **참고**: 이 프로젝트의 Next.js 버전은 기존에 알려진 컨벤션과 다른 부분(예: `middleware.ts` → `proxy.ts` 이름 변경)이 있습니다. 새 코드를 작성하기 전에 `node_modules/next/dist/docs/`의 문서를 확인하세요 (자세한 내용은 [AGENTS.md](./AGENTS.md) 참고).

## 폴더 구조

```
jntrading-company-site/
├─ public/
│  └─ images/              # 정적 이미지 (로고, 히어로 배너, 제품 사진 등)
│     ├─ logo.png
│     ├─ home_image1.png   # 홈페이지 히어로 배너
│     ├─ industry.png      # 산업기계/베어링류 카드 이미지
│     ├─ medical.png       # 의료기기 카드 이미지
│     ├─ kor_chips.png     # 한국산 칩스류 카드 이미지
│     ├─ organic_soap.png  # 해외 유기농 비누 카드 이미지
│     └─ globe.svg
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx        # 루트 레이아웃 (Header/Footer 공통 적용, 폰트/메타데이터)
│  │  ├─ page.tsx          # 홈페이지 (히어로, 카테고리 카드, About/Global Sourcing)
│  │  ├─ globals.css       # Tailwind 진입점, 전역 CSS 변수
│  │  └─ favicon.ico
│  ├─ components/
│  │  └─ layout/
│  │     ├─ Header.tsx     # 상단 네비게이션 (로고, 메뉴, 언어 전환, 모바일 메뉴)
│  │     └─ Footer.tsx     # 하단 바 (이메일/전화/팩스/주소, 저작권)
│  ├─ lib/
│  │  ├─ locale/
│  │  │  ├─ LocaleContext.tsx  # ko/en 언어 상태 Context + localStorage 동기화
│  │  │  └─ translations.ts    # Header/Footer/홈 화면 한국어·영어 번역 사전
│  │  └─ supabase/
│  │     ├─ client.ts      # 브라우저(클라이언트 컴포넌트)용 Supabase 클라이언트
│  │     ├─ server.ts      # 서버 컴포넌트/서버 액션용 Supabase 클라이언트
│  │     └─ middleware.ts  # 요청마다 Supabase 세션을 갱신 (proxy.ts에서 호출)
│  └─ proxy.ts              # Next.js 16의 Proxy(구 middleware) — 모든 요청에서 세션 갱신
├─ .env.local               # 로컬 환경변수 (git 미포함)
├─ .env.local.example       # 환경변수 템플릿
├─ next.config.ts
├─ tsconfig.json
├─ eslint.config.mjs
└─ package.json
```

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경변수 설정

`.env.local.example`을 복사해 `.env.local`을 만들고, Supabase 프로젝트 값을 채워주세요.

```bash
cp .env.local.example .env.local
```

| 변수명 | 설명 |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase 프로젝트 URL |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Supabase publishable(anon) key |

> `NEXT_PUBLIC_` 접두사가 붙은 값은 브라우저에 노출되는 공개 값입니다. 민감한 서비스 키는 별도로 관리하세요.

### 3. 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

### 기타 스크립트

```bash
npm run build   # 프로덕션 빌드
npm run start   # 빌드된 결과 실행
npm run lint    # ESLint 검사
```

## 현재 진행 상황

### 1. 다국어(한국어/영어) 전환

Header 우측의 "한국어 | English" 토글로 사이트 텍스트를 즉시 전환할 수 있습니다.

- `LocaleProvider`([src/lib/locale/LocaleContext.tsx](./src/lib/locale/LocaleContext.tsx))가 앱 전체를 감싸 언어 상태(`ko`/`en`)를 공유합니다. 선택한 언어는 `localStorage`에 저장되어 새로고침·재방문 시에도 유지됩니다.
- 번역 문구는 [src/lib/locale/translations.ts](./src/lib/locale/translations.ts) 한 곳에 모여 있으며, Header 메뉴/Footer 주소·팩스/홈 화면(히어로, 사업 카테고리 4종, 회사소개, 글로벌 소싱) 텍스트를 포함합니다.
- 이메일·전화번호·저작권 표기처럼 언어와 무관한 값은 번역 대상에서 제외했습니다.
- 모바일(640px 미만)에서는 상단바 대신 햄버거 메뉴를 펼쳤을 때 언어 토글이 표시됩니다.

### 2. 아직 만들어지지 않은 페이지 임시 처리

`/about`, `/business`, `/products`, `/sourcing`, `/contact`와 사업 카테고리 상세 페이지(`/business/bearing`, `/business/medical`, `/business/snacks`, `/business/soap`)는 아직 실제 라우트가 없어 접속 시 404가 발생합니다. 페이지가 준비되기 전까지 **클릭해도 이동하지 않도록** `href`를 주석 처리하고, `Link` 대신 `button`/`div`로 임시 대체해 두었습니다.

| 위치 | 항목 | 비고 |
| --- | --- | --- |
| [Header.tsx](./src/components/layout/Header.tsx) `NAV_ITEMS` | 회사소개 · 사업분야 · 취급제품 · 글로벌 소싱 · 문의하기 | 클릭 시 Home과 동일한 밑줄/색상 강조는 유지 |
| [page.tsx](./src/app/page.tsx) `CATEGORIES` | 산업기계/베어링류 · 의료기기 · 한국산 칩스류 · 해외 유기농 비누 카드 | |
| [page.tsx](./src/app/page.tsx) 히어로 CTA | "문의하기" 버튼 (`/contact`) | |
| [page.tsx](./src/app/page.tsx) About 섹션 | "회사소개 더보기" 버튼 (`/about`) | |

**해당 페이지가 만들어지면**: 각 위치의 `href: /* "/경로" */ undefined` 또는 `// href="/경로"` 주석을 해제하면 자동으로 `Link`로 되돌아가 정상적으로 페이지 이동이 이루어집니다.

## 브랜치 전략

- `main` — 배포(운영) 기준 브랜치. Vercel Production이 이 브랜치를 추적합니다.
- `develop` — 기능 개발 브랜치. 작업 완료 후 PR을 통해 `main`으로 머지합니다.

## 배포

- **호스팅**: [Vercel](https://vercel.com) — GitHub 저장소(`jooho2075/jntrading-company-site`)와 연동, `main` 브랜치 push 시 자동 배포
- **환경변수**: Vercel 프로젝트 → Settings → Environments(Production)에 `.env.local`과 동일한 키 등록 필요 (변경 시 재배포 필요 — `NEXT_PUBLIC_*` 값은 빌드 타임에 번들에 포함됨)
- **커스텀 도메인**: `jntrading.kr` (가비아 등록) → Vercel Settings → Domains에서 연결, 가비아 DNS에 Vercel이 안내하는 A/CNAME 레코드 등록

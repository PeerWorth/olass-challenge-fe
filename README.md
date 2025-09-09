# Olass

- 사회초년생이 자산관리를 재미있는 습관 형성의 여정으로 받아들일 수 있도록 돕는 동기부여 서비스
- 유저는 매주 주어지는 작고 구체적인 미션을 수행하고 인증하면서, 자연스럽게 자산관리 행동을 실천하고 습관을 형성
- Olass는 도전의식과 성취감을 지속적으로 제공하여, 자산관리를 시작하지 못했던 사용자도 행동을 이어갈 수 있도록 유도
<br/>
<br/>

# 사용 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Data Fetching**: TanStack Query + Axios
- **Styling**: Tailwind CSS V4, Emotion
- **Architecture**: FSD (Feature-Sliced Design)
<br/>
<br/>

# 프로젝트 폴더 구조

이 프로젝트는 **Feature-Sliced Design (FSD)** 아키텍처와 **Next.js App Router**를 함께 사용하여 최적의 코드 구조와 라우팅을 제공

## 프로젝트 구조

```markdown
app/ # Next.js App Router (라우팅)
├── layout.tsx # 루트 레이아웃
├── page.tsx # 홈페이지 (/)
├── about/
│ └── page.tsx # About 페이지 (/about)
└── products/
└── page.tsx # Products 페이지 (/products)

src/ # FSD 구조
├── app/ # 앱 레벨 설정 (프로바이더, 설정, 초기화)
├── views/ # 페이지 컴포넌트들 (Pages Layer)
| - Next.js의 page router와 충돌하기 때문에 views로 수정
├── widgets/ # 위젯들 (Widgets Layer)
├── features/ # 기능들 (Features Layer)
├── entities/ # 엔티티들 (Entities Layer)
└── shared/ # 공유 컴포넌트들 (Shared Layer)
```

## 역할 분담

| 폴더            | 역할                | 설명                                |
| --------------- | ------------------- | ----------------------------------- |
| `app/`          | **Next.js 라우팅**  | 폴더 구조 = URL 구조, 라우팅만 담당 |
| `src/app/`      | **FSD 앱 레벨**     | 프로바이더, 설정, 초기화 로직       |
| `src/views/`    | **페이지 컴포넌트** | 실제 페이지 UI 로직                 |
| `src/widgets/`  | **위젯**            | 페이지를 구성하는 큰 블록들         |
| `src/features/` | **기능**            | 비즈니스 기능 단위                  |
| `src/entities/` | **엔티티**          | 비즈니스 엔티티                     |
| `src/shared/`   | **공유**            | 재사용 가능한 공통 컴포넌트         |

## 새로운 페이지 추가 방법

### 1. Next.js 라우트 생성 (`app/` 폴더)

```typescript
// app/about/page.tsx
import { AboutPage } from "@/pages/about";

export default function About() {
  return <AboutPage />;
}
```

### 2. FSD 페이지 컴포넌트 생성 (`src/pages/` 폴더)

```typescript
// src/pages/about/index.ts
export { AboutPage } from "./ui/AboutPage";

// src/pages/about/ui/AboutPage.tsx
export function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>회사 소개 페이지입니다.</p>
    </div>
  );
}
```

## Import 패턴

- **경로 별칭**: `@/` → `src/`
- **페이지 import**: `@/pages/페이지명`
- **위젯 import**: `@/widgets/위젯명`
- **기능 import**: `@/features/기능명`
- **엔티티 import**: `@/entities/엔티티명`
- **공유 import**: `@/shared/공유컴포넌트명`

## 장점

- ✅ **명확한 관심사 분리**: 라우팅과 UI 로직 분리
- ✅ **확장 가능한 아키텍처**: FSD의 구조적 장점 활용
- ✅ **Next.js 기능**: App Router의 모든 기능 사용 가능
- ✅ **코드 재사용성**: 위젯과 피처 재사용 가능
- ✅ **타입 안전성**: TypeScript와 완벽 호환

## 학습 자료

- [Next.js 문서](https://nextjs.org/docs) - Next.js 기능과 API 학습
- [Next.js 학습](https://nextjs.org/learn) - 인터랙티브 Next.js 튜토리얼
- [Feature-Sliced Design](https://feature-sliced.design/) - FSD 아키텍처 학습

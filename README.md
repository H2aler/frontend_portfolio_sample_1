# 🚀 Amazing Portfolio

세상에서 가장 멋진 포트폴리오 웹사이트입니다! 현대적인 디자인과 부드러운 애니메이션으로 제작되었습니다.

## ✨ 특징

- 🎨 **현대적인 디자인**: Glassmorphism과 그라디언트 효과를 활용한 아름다운 UI
- 🎭 **부드러운 애니메이션**: Framer Motion을 사용한 인터랙티브한 애니메이션
- 📱 **완전 반응형**: 모든 디바이스에서 완벽하게 작동
- ⚡ **빠른 성능**: Vite를 사용한 최적화된 빌드
- 🎯 **섹션 구성**: Hero, About, Skills, Projects, Contact

## 🛠️ 기술 스택

- **React 18** - UI 라이브러리
- **Vite** - 빌드 도구
- **Framer Motion** - 애니메이션
- **React Icons** - 아이콘
- **CSS3** - 스타일링

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:5173](http://localhost:5173)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

### 미리보기

```bash
npm run preview
```

## 📁 프로젝트 구조

```
amazing-portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # 메인 히어로 섹션
│   │   ├── About.jsx         # 소개 섹션
│   │   ├── Skills.jsx        # 기술 스택 섹션
│   │   ├── Projects.jsx     # 프로젝트 섹션
│   │   ├── Contact.jsx      # 연락처 섹션
│   │   └── Navbar.jsx       # 네비게이션 바
│   ├── App.jsx              # 메인 앱 컴포넌트
│   ├── main.jsx             # 진입점
│   └── index.css            # 전역 스타일
├── index.html
├── package.json
└── vite.config.js
```

## 🌐 GitHub Pages 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 배포됩니다.

### 배포 설정

1. GitHub 저장소의 **Settings** → **Pages**로 이동
2. **Source**를 **"GitHub Actions"**로 선택
3. `main` 브랜치에 푸시하면 자동으로 빌드되고 배포됩니다

### 배포 URL

배포가 완료되면 다음 URL에서 확인할 수 있습니다:
```
https://h2aler.github.io/frontend_portfolio_sample_1/
```

**중요:** 
- GitHub Pages는 **빌드된 파일(`dist` 폴더)**만 제공할 수 있습니다
- 소스 파일(`/src/main.jsx`)을 직접 제공할 수 없습니다
- `npm run build`로 빌드한 후 `dist` 폴더의 내용을 배포해야 합니다
- GitHub Actions가 자동으로 이를 처리합니다

## 🎨 커스터마이징

### 색상 변경

`src/index.css` 파일의 CSS 변수를 수정하여 색상을 변경할 수 있습니다:

```css
:root {
  --primary: #6366f1;
  --secondary: #ec4899;
  --accent: #f59e0b;
  /* ... */
}
```

### 콘텐츠 수정

각 컴포넌트 파일에서 텍스트, 프로젝트 정보, 기술 스택 등을 수정할 수 있습니다.

## 📝 라이선스

이 프로젝트는 오직 저만 사용할 수 있습니다. 무단 사용 및 복제를 금지합니다.

---

Made with ❤️ and React

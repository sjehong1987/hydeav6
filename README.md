# HYDEA - Hydration + Idea

프리미엄 K-뷰티 브랜드 HYDEA의 공식 웹사이트입니다. 샤워헤드, 샤워필터, 스킨케어 제품을 무인 자판기를 통해 판매하는 혁신적인 비즈니스 모델을 소개합니다.

## 프로젝트 구조

```
hydea-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Story.jsx
│   │   ├── Products.jsx
│   │   ├── Business.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── *.css (각 컴포넌트 스타일)
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── .gitignore
```

## 기술 스택

- **React 18.2** - UI 라이브러리
- **Vite** - 빌드 도구 및 개발 서버
- **CSS3** - 스타일링
- **Vercel** - 배포 플랫폼

## 로컬 개발 환경 설정

### 1. 필수 요구사항
- Node.js 16.x 이상
- npm 또는 yarn

### 2. 설치

```bash
# 프로젝트 디렉토리로 이동
cd hydea-website

# 의존성 설치
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하면 웹사이트를 확인할 수 있습니다.

### 4. 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist/` 디렉토리에 생성됩니다.

### 5. 빌드 결과 미리보기

```bash
npm run preview
```

## Vercel에 배포하기

### 방법 1: GitHub 연동을 통한 자동 배포 (권장)

#### 1단계: GitHub 저장소 생성

```bash
# 로컬 Git 저장소 초기화
git init

# 모든 파일 추가
git add .

# 초기 커밋
git commit -m "Initial commit: HYDEA website"

# GitHub에 저장소 생성 후 (https://github.com/new)
# 원격 저장소 추가
git remote add origin https://github.com/YOUR_USERNAME/hydea-website.git

# 메인 브랜치로 푸시
git branch -M main
git push -u origin main
```

#### 2단계: Vercel에 프로젝트 연동

1. [Vercel 공식 사이트](https://vercel.com)에 접속
2. GitHub 계정으로 로그인
3. "New Project" 클릭
4. GitHub에서 `hydea-website` 저장소 선택
5. 프로젝트 설정:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. "Deploy" 클릭

#### 3단계: 커스텀 도메인 연결

1. Vercel 대시보드에서 프로젝트 선택
2. "Settings" → "Domains" 클릭
3. "Add Domain" 클릭
4. `hydrationidea.com` 입력
5. DNS 설정 지침 따르기 (가비아에서 이미 설정됨)

### 방법 2: Vercel CLI를 통한 수동 배포

#### 1단계: Vercel CLI 설치

```bash
npm install -g vercel
```

#### 2단계: Vercel에 로그인

```bash
vercel login
```

#### 3단계: 프로젝트 배포

```bash
vercel
```

프롬프트에서 다음과 같이 설정:
- **Project name**: hydea-website
- **Directory**: ./
- **Build command**: npm run build
- **Output directory**: dist

#### 4단계: 프로덕션 배포

```bash
vercel --prod
```

## 도메인 연결 (hydrationidea.com)

### 가비아에서 DNS 설정 (이미 완료됨)

현재 가비아에서 다음과 같이 설정되어 있습니다:
- **A Record**: @ → 104.19.168.112 (또는 Vercel IP)

### Vercel에서 도메인 설정

1. Vercel 프로젝트 → Settings → Domains
2. "Add Domain" 클릭
3. `hydrationidea.com` 입력
4. DNS 레코드 확인 및 추가

## 환경 변수 설정

필요한 경우 `.env.local` 파일을 생성하여 환경 변수를 설정할 수 있습니다:

```
VITE_API_URL=https://api.hydea.co
VITE_CONTACT_EMAIL=sales@hydrationidea.com
```

## 주요 기능

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ 다국어 지원 (영어, 한국어, 태국어)
- ✅ 부드러운 스크롤 애니메이션
- ✅ 연락처 폼
- ✅ SEO 최적화
- ✅ 빠른 로딩 속도 (Vite 최적화)

## 배포 후 확인 사항

1. **도메인 접속 확인**: https://hydrationidea.com
2. **모바일 반응형 확인**: 다양한 기기에서 테스트
3. **언어 전환 확인**: 영어, 한국어, 태국어 정상 작동
4. **연락처 폼 확인**: 이메일 전송 기능 테스트
5. **성능 확인**: [Vercel Analytics](https://vercel.com/analytics) 확인

## 업데이트 및 유지보수

### 코드 수정 후 배포

```bash
# 로컬에서 수정 후
git add .
git commit -m "Update: [변경 사항 설명]"
git push origin main

# Vercel에서 자동으로 배포됨 (GitHub 연동 시)
```

### 프로덕션 환경에서 즉시 배포

```bash
vercel --prod
```

## 문제 해결

### 배포 후 도메인이 작동하지 않는 경우

1. DNS 설정 확인: `nslookup hydrationidea.com`
2. Vercel 대시보드에서 도메인 상태 확인
3. 가비아에서 DNS 레코드 재확인
4. 캐시 초기화 후 재시도

### 빌드 오류 발생 시

```bash
# node_modules 삭제 후 재설치
rm -rf node_modules
npm install

# 캐시 초기화
npm cache clean --force

# 다시 빌드
npm run build
```

## 라이선스

© 2026 HYDEA. All rights reserved.

## 지원

문의사항이 있으시면 contact@hydea.co로 연락주세요.

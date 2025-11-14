<div align="center">

# 🚀 ScanNest  
### 스캔만 하면 바로 최저가 비교되는 스마트 가격 검색 서비스

<img src="https://placehold.co/200x200?text=ScanNest" width="200" />

</div>

---

## 📌 프로젝트 소개

**ScanNest**는  
상품의 **바코드 / 제품명 / 이미지**를 스캔하면  
AI + 쇼핑몰 API를 기반으로 **최저가를 실시간 비교**해주는 서비스입니다.

사용자는  
- 바코드 한 번 찍고  
- 최저가 리스트 확인하고  
- 멤버십별 할인까지 자동 계산된 **최종 가격**을 확인할 수 있습니다.

> 단순한 가격비교를 넘어  
> **사용자 멤버십 기반 최적 가격을 제시하는** 새로운 방식의 스마트 쇼핑 도구입니다.

---

## 🏗 기술 스택

### **Frontend**
- Vue 3 (Composition API + `<script setup>`)
- Vite  
- TypeScript  
- TailwindCSS  
- Pinia (전역 상태 관리 예정)
- Vue Router

### **Infra / Backend (예정)**
- Firebase Hosting / Firestore  
- 네이버 쇼핑 API  
- 쇼핑몰 오픈 API (쿠팡, SSG, 11번가 등)

### **Tools**
- Git / GitHub  
- Figma  
- VSCode  

---

## 📱 주요 기능

### ✔ 1. **온보딩 5단계**
- 앱 개요 안내  
- 기능 설명  
- 카메라 권한 안내  
- 약관 및 접근 권한 동의  
- 쇼핑몰 멤버십 설정  

### ✔ 2. **스캔 기능**
- 카메라 기반 바코드 인식  
- 이미지 업로드 기반 상품 탐색  

### ✔ 3. **상품 검색 (Depth1)**
- 바코드 / 텍스트 기반 검색  
- 유사 상품(Variants)까지 리스트업  
- 상품 선택 시 상세 비교 페이지 이동  

### ✔ 4. **가격 비교 (Depth2)**
쇼핑몰별 카드 리스트 UI:
- 기본가  
- 멤버십가  
- 쿠폰 적용가  
- 배송비 포함 최종가  
- 쇼핑몰 로고/배지 표시  

### ✔ 5. **사용자 멤버십 기반 계산**
선택 멤버십:
- 로켓와우  
- 네이버플러스  
- 11번가 패스  
- SSG 클럽  

→ 자동으로 **할인 적용 최저가 계산**

### ✔ 6. **공통 레이아웃**
- 상단 헤더  
- 햄버거 메뉴 → 슬라이드 사이드 내비  
- 멤버십 설정 재진입 가능  

---

## 🔧 폴더 구조

```bash
src/
 ├─ assets/
 ├─ components/
 │    └─ layout/
 │          ├─ Header.vue
 │          └─ SideNav.vue
 ├─ layout/
 │    └─ MainLayout.vue
 ├─ pages/
 │    ├─ onboarding/
 │    │      ├─ Welcome.vue
 │    │      ├─ Permission.vue
 │    │      ├─ Features.vue
 │    │      ├─ Terms.vue
 │    │      └─ Membership.vue
 │    ├─ result/
 │    │      ├─ SearchResultPage.vue
 │    │      └─ PriceComparePage.vue
 │    ├─ HomePage.vue
 │    └─ ScanPage.vue
 ├─ router/
 │    └─ index.ts
 ├─ stores/      # 상태관리 (예정)
 ├─ services/    # API 통신 모듈
 └─ main.ts


# 1. 패키지 설치
npm install

# 2. 개발 서버 실행
npm run dev

# 3. 빌드
npm run build

# 4. 빌드 결과 미리보기
npm run preview

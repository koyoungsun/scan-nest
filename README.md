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

> 단순한 "가격비교"가 아닌  
> **사용자 멤버십 기반 최적 가격을 제시하는** 새로운 방식의 가격 검색 앱입니다.

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
- 바코드 / 텍스트 검색 결과 리스트업  
- 유사 상품(Variant)까지 함께 탐색  
- 상품 클릭 시 상세 가격 비교 페이지 이동

### ✔ 4. **가격 비교 (Depth2)**
쇼핑몰별 카드 리스트로 제공:
- 기본가
- 멤버십가
- 쿠폰 적용 최저가
- 배송비 반영 최종가
- 쇼핑몰 배지 UI

### ✔ 5. **사용자 멤버십 기반 계산**
사용자가 보유한 쇼핑 멤버십 체크:
- 로켓와우
- 네이버플러스
- SSG 클럽
- 11번가 패스  
→ Depth2 계산 로직에 반영되어 **진짜 최저가**를 제공

### ✔ 6. **슬라이드 내비게이션 + 헤더**
- 모든 페이지 공통 헤더
- 햄버거 버튼 → 슬라이드 메뉴
- 멤버십 설정 재수정 가능

---

## 🔧 폴더 구조

```bash
src/
 ├─ assets/
 ├─ components/
 │    └─ layout/
 │         ├─ Header.vue
 │         └─ SideNav.vue
 ├─ layout/
 │    └─ MainLayout.vue
 ├─ pages/
 │    ├─ onboarding/
 │    │    ├─ Welcome.vue
 │    │    ├─ Permission.vue
 │    │    ├─ Features.vue
 │    │    ├─ Terms.vue
 │    │    └─ Membership.vue
 │    ├─ result/
 │    │    ├─ SearchResultPage.vue
 │    │    └─ PriceComparePage.vue
 │    ├─ HomePage.vue
 │    └─ ScanPage.vue
 ├─ router/
 │    └─ index.ts
 ├─ stores/  (예정)
 ├─ services/ (API 모듈)
 └─ main.ts

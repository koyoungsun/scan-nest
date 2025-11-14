import { createRouter, createWebHistory } from "vue-router";

// 온보딩 페이지
import Welcome from "../pages/onboarding/Welcome.vue";
import Permission from "../pages/onboarding/Permission.vue";
import Features from "../pages/onboarding/Features.vue";
import Terms from "../pages/onboarding/Terms.vue";
import Membership from "../pages/onboarding/Membership.vue";

// 메인 레이아웃
import MainLayout from "../layout/MainLayout.vue";

// 메인 페이지들
import HomePage from "../pages/HomePage.vue";
import ScanPage from "../pages/ScanPage.vue";

// 검색 결과 (Depth1, Depth2)
import SearchResultPage from "../pages/result/SearchResultPage.vue";
import PriceComparePage from "../pages/result/PriceComparePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // ---------------------------
    // 온보딩 플로우 (레이아웃 없음)
    // ---------------------------
    { path: "/onboarding/welcome", component: Welcome },
    { path: "/onboarding/permission", component: Permission },
    { path: "/onboarding/features", component: Features },
    { path: "/onboarding/terms", component: Terms },
    { path: "/onboarding/membership", component: Membership },

    // ---------------------------
    // 메인 레이아웃 아래 화면들
    // ---------------------------
    {
      path: "/",
      component: MainLayout,
      children: [
        { path: "home", component: HomePage },
        { path: "scan", component: ScanPage },
        { path: "result", component: SearchResultPage },
        {
          path: "result/:id",
          component: PriceComparePage,
          props: true,
        },
      ],
    },

    // ---------------------------
    // 기본 경로 → 온보딩 시작
    // ---------------------------
    { path: "/:pathMatch(.*)*", redirect: "/onboarding/welcome" },
  ],
});

// ====================================================================
// 📌 온보딩 여부 체크 네비게이션 가드
// ====================================================================

router.beforeEach((to, from, next) => {
  const onboardingDone = localStorage.getItem("scannest_onboarding") === "done";

  const onboardingPages = [
    "/onboarding/welcome",
    "/onboarding/permission",
    "/onboarding/features",
    "/onboarding/terms",
    "/onboarding/membership",
  ];

  const isOnboardingPage = onboardingPages.includes(to.path);

  // 1) 온보딩 끝 → 온보딩 페이지 접근 → 홈으로
  if (onboardingDone && isOnboardingPage) {
    return next("/home");
  }

  // 2) 온보딩 안 끝남 → 일반 페이지 접근 → 온보딩 시작
  if (!onboardingDone && !isOnboardingPage) {
    return next("/onboarding/welcome");
  }

  next();
});

export default router;
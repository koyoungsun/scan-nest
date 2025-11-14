<template>
    <section class="min-h-screen p-8 flex flex-col">
      <h2 class="text-2xl font-bold mt-8 mb-4">멤버십 설정</h2>
      <p class="text-gray-600 mb-6">정확한 가격 비교를 위해 가입 중인 멤버십을 알려주세요.</p>
  
      <div class="space-y-4">
        <label class="flex items-center gap-3">
          <input type="checkbox" v-model="mem.coupang" />
          쿠팡 로켓와우
        </label>
  
        <label class="flex items-center gap-3">
          <input type="checkbox" v-model="mem.naver" />
          네이버 플러스 멤버십
        </label>
  
        <label class="flex items-center gap-3">
          <input type="checkbox" v-model="mem.eleven" />
          11번가 아마존 제휴
        </label>
  
        <label class="flex items-center gap-3">
          <input type="checkbox" v-model="mem.ssg" />
          SSG 멤버십
        </label>
      </div>
  
      <button
        @click="finish"
        class="mt-auto bg-blue-600 text-white py-3 rounded-xl mt-10"
      >
        설정하고 시작하기
      </button>
    </section>
  </template>
  
  <script setup lang="ts">
  import { reactive } from "vue";
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  const mem = reactive({
    coupang: false,
    naver: false,
    eleven: false,
    ssg: false,
  });
  
  const finish = () => {
    localStorage.setItem("scannest_onboarding", "done");
    router.push("/");
    };
  </script>
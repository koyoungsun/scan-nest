<template>
    <section class="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <img src="/vite.svg" alt="" class="w-20 mb-8 opacity-70" />
  
      <h1 class="text-2xl font-bold mb-4">스캔하면 바로 최저가</h1>
      <p class="text-gray-600 mb-10">
        상품의 바코드·이미지를 스캔해<br />
        실시간 가격 비교를 제공합니다.
      </p>
  
      <button
        @click="goNext"
        class="w-full bg-blue-600 text-white py-3 rounded-xl text-lg"
      >
        시작하기
      </button>
    </section>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from "vue-router";
  const router = useRouter();
  const goNext = () => router.push("/onboarding/permission");
  </script>
<template>
    <section class="min-h-screen flex flex-col justify-between p-8">
      <div class="mt-20">
        <h2 class="text-2xl font-bold mb-4">카메라 접근 권한 요청</h2>
        <p class="text-gray-600 leading-relaxed">
          바코드 스캔 및 상품 인식을 위해<br />
          카메라 접근 권한이 필요합니다.
        </p>
      </div>
  
      <div class="flex flex-col space-y-3 mb-10">
        <button
          @click="goNext"
          class="w-full bg-blue-600 text-white py-3 rounded-xl"
        >
          권한 허용하고 계속하기
        </button>
  
        <button
          @click="skip"
          class="w-full bg-gray-200 text-gray-800 py-3 rounded-xl"
        >
          나중에 하기
        </button>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from "vue-router";
  const router = useRouter();
  
  const goNext = () => {
    router.push("/onboarding/features");
  };
  
  const skip = () => {
    router.push("/onboarding/features");
  };
  </script>
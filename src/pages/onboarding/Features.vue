<template>
    <section class="min-h-screen flex flex-col justify-between p-8">
      <div class="mt-16 text-center">
        <h2 class="text-2xl font-bold mb-6">ScanNest 기능 안내</h2>
  
        <div v-if="step === 1" class="fade">
          <p class="text-gray-600 text-lg">1. 상품 바코드를 스캔하세요</p>
        </div>
  
        <div v-else-if="step === 2" class="fade">
          <p class="text-gray-600 text-lg">2. 정확한 상품을 선택하세요</p>
        </div>
  
        <div v-else class="fade">
          <p class="text-gray-600 text-lg">3. 사이트별 실결제 가격 비교</p>
        </div>
      </div>
  
      <div class="flex justify-between items-center mb-10">
        <button @click="prev" class="text-gray-400">&lt;</button>
  
        <div class="flex gap-2">
          <div v-for="i in 3" :key="i"
            :class="['w-2 h-2 rounded-full', step === i ? 'bg-blue-600' : 'bg-gray-300']"
          />
        </div>
  
        <button @click="next" class="text-gray-400">&gt;</button>
      </div>
  
      <button
        v-if="step === 3"
        @click="finish"
        class="w-full bg-blue-600 text-white py-3 rounded-xl"
      >
        다음 단계로
      </button>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  const step = ref(1);
  
  const next = () => (step.value < 3 ? step.value++ : null);
  const prev = () => (step.value > 1 ? step.value-- : null);
  const finish = () => router.push("/onboarding/terms");
  </script>
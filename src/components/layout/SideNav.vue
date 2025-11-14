<template>
    <!-- 어두운 배경 -->
    <div
      v-if="open"
      class="fixed inset-0 bg-black/40 z-40"
      @click="$emit('close')"
    ></div>
  
    <!-- 사이드 패널 -->
    <aside
      class="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300"
      :class="open ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="p-4 mt-6">
        <h2 class="text-xl font-bold mb-4">메뉴</h2>
  
        <nav class="space-y-3">
          <router-link
            to="/home"
            class="block text-gray-700 hover:text-blue-600"
            @click="$emit('close')"
          >
            홈
          </router-link>
  
          <router-link
            to="/scan"
            class="block text-gray-700 hover:text-blue-600"
            @click="$emit('close')"
          >
            스캔하기
          </router-link>
  
          <router-link
            to="/result"
            class="block text-gray-700 hover:text-blue-600"
            @click="$emit('close')"
          >
            검색결과
          </router-link>
  
          <router-link
            to="/onboarding/membership"
            class="block text-gray-700 hover:text-blue-600"
            @click="$emit('close')"
          >
            멤버십 설정
          </router-link>
        </nav>
      </div>
    </aside>
  </template>
  
  <script setup>
  defineProps({
    open: Boolean,
  });
  defineEmits(["close"]);
  </script>
  
  <style scoped>
  </style>
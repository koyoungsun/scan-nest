<template>
    <div class="min-h-screen flex flex-col">
      <!-- 상단 헤더 -->
      <Header @toggleMenu="open = true" />
  
      <!-- 사이드 메뉴 -->
      <SideNav :open="open" @close="open = false" />
  
      <!-- 실제 페이지 -->
      <main class="flex-1 pt-14"> 
        <router-view />
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import Header from "../components/layout/Header.vue";
  import SideNav from "../components/layout/SideNav.vue";  
  const open = ref(false);
  </script>
  
  <style scoped>
  /* 필요하면 여기에 */
  </style>
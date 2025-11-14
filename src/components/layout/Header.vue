<template>
    <header
      class="fixed top-0 left-0 right-0 h-14 bg-white shadow flex items-center justify-between px-4 z-50"
    >
      <h1 class="text-xl font-bold text-blue-600">ScanNest</h1>
  
      <button @click="$emit('toggleMenu')">
        <i class="bi bi-list text-3xl"></i>
      </button>
    </header>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  </style>
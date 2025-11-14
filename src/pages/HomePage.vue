<template>
    <div class="p-6">
      <h1 class="text-3xl font-bold mb-4">ScanNest</h1>
      <p class="text-gray-600">상품을 스캔하거나 검색해서 최저가를 비교하세요.</p>
  
      <div class="mt-6 flex gap-4">
        <router-link
          to="/scan"
          class="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          스캔하기
        </router-link>
  
        <router-link
          to="/result"
          class="bg-gray-200 text-black px-4 py-2 rounded-lg"
        >
          검색결과
        </router-link>
      </div>
    </div>
  </template>
<template>
    <section class="p-6">
      <h2 class="text-xl font-bold mb-4">{{ product.name }}</h2>
  
      <img :src="product.image" class="w-full rounded-lg mb-6" />
  
      <div class="space-y-6">
        <div
          v-for="site in product.sites"
          :key="site.name"
          class="border rounded-xl p-4 shadow-sm"
        >
          <div class="flex justify-between items-center mb-2">
            <h3 class="font-bold text-lg">{{ site.name }}</h3>
            <span class="text-gray-600">{{ site.type }}</span>
          </div>
  
          <p>기본가: {{ site.normal.toLocaleString() }}원</p>
          <p>멤버십가: {{ site.member.toLocaleString() }}원</p>
          <p>쿠폰가: {{ site.coupon.toLocaleString() }}원</p>
  
          <p class="text-blue-600 font-bold mt-2 text-xl">
            최종가: {{ site.final.toLocaleString() }}원
          </p>
  
          <button
            class="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            구매하기
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  
  const route = useRoute();
  
  const product = ref<any>({
    name: "삼다수 2L x 6펫",
    image: "https://via.placeholder.com/600x400",
    sites: [],
  });
  
  onMounted(() => {
    product.value.sites = [
      {
        name: "쿠팡",
        type: "로켓배송",
        normal: 15900,
        member: 13900,
        coupon: 12900,
        final: 12900,
      },
      {
        name: "네이버",
        type: "스마트스토어",
        normal: 14500,
        member: 13800,
        coupon: 13800,
        final: 13386,
      },
    ];
  });
  </script>
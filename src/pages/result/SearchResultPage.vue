<template>
    <section class="p-6">
      <h2 class="text-xl font-bold mb-4">검색 결과</h2>
  
      <div v-if="loading" class="text-center text-gray-500">불러오는 중...</div>
  
      <div v-for="item in results" :key="item.id" class="border rounded-xl p-4 mb-3"
        @click="goDetail(item)"
      >
        <div class="flex gap-4">
          <img :src="item.image" class="w-20 h-20 object-cover rounded" />
  
          <div class="flex flex-col justify-between">
            <h3 class="font-bold">{{ item.name }}</h3>
            <p class="text-gray-500 text-sm">{{ item.spec }}</p>
            <p class="text-blue-600 font-bold mt-1">
              최저가 {{ item.lowestPrice.toLocaleString() }}원
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { useRouter, useRoute } from "vue-router";
  
  const router = useRouter();
  const route = useRoute();
  
  const loading = ref(true);
  const results = ref<any[]>([]);
  
  onMounted(() => {
    // 실제 검색 데이터 로직
    results.value = [
      {
        id: 1,
        name: "삼다수 2L x 6펫",
        spec: "2L • 6개입",
        lowestPrice: 7900,
        image: "https://via.placeholder.com/100",
      },
    ];
    loading.value = false;
  });
  
  const goDetail = (item: any) => {
    router.push(`/result/${item.id}`);
  };
  </script>
<template>
    <section class="flex flex-col min-h-screen p-8">
      <h2 class="text-xl font-bold mt-8 mb-4">약관 및 동의</h2>
  
      <p class="text-gray-600 mb-4">서비스 이용을 위해 아래 항목에 동의해주세요.</p>
  
      <div class="space-y-4 text-gray-800">
        <label class="flex items-center gap-3">
          <input type="checkbox" v-model="agree.camera" />
          카메라 접근 권한 동의 (필수)
        </label>
  
        <label class="flex items-center gap-3">
          <input type="checkbox" v-model="agree.personal" />
          개인정보 수집·이용 동의 (필수)
        </label>
  
        <label class="flex items-center gap-3">
          <input type="checkbox" v-model="agree.storage" />
          데이터 저장·처리 동의 (필수)
        </label>
  
        <label class="flex items-center gap-3">
          <input type="checkbox" v-model="agree.terms" />
          서비스 이용 약관 동의 (필수)
        </label>
  
        <label class="flex items-center gap-3">
          <input type="checkbox" v-model="agree.optional" />
          서비스 개선을 위한 통계 수집 동의 (선택)
        </label>
      </div>
  
      <button
        class="mt-auto bg-blue-600 text-white py-3 rounded-xl mt-10"
        :disabled="!allRequiredChecked"
        @click="next"
      >
        동의하고 계속하기
      </button>
    </section>
  </template>
  
  <script setup lang="ts">
  import { reactive, computed } from "vue";
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  const agree = reactive({
    camera: false,
    personal: false,
    storage: false,
    terms: false,
    optional: false,
  });
  
  const allRequiredChecked = computed(() =>
    agree.camera && agree.personal && agree.storage && agree.terms
  );
  
  const next = () => {
    router.push("/onboarding/membership");
  };
  </script>
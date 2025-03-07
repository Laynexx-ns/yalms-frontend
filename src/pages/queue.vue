<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import { QueueItem} from "@/types";
import QueueCard from "@/components/queue-card.vue";

const responseValues = ref<QueueItem[]>([]);


onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/v1/queue");
    responseValues.value = response.data;
  } catch (e) {
    console.error(e);
  }
});
</script>

<template>
  <div class="min-h-screen max-w-screen-md w-full text-white">
    <RouterLink class="w-full p-6 md:p-12 flex justify-center items-center" to="/">
      <button
          class="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 absolute top-8"
      >Вернуться назад</button>
    </RouterLink>

    <div class="appearing-item min-h-screen w-full flex flex-col gap-8 items-center justify-start pt-24 px-4 sm:px-6 md:px-8">
      <div class="w-full max-w-4xl">
        <h1 class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
          Очередь вычислений
        </h1>
        <p class="text-gray-400 mb-6">Просмотр всех тасок для агента</p>
      </div>

      <div class="w-full gap-4 grid grid-cols-1 md:grid-cols-2">
        <QueueCard class="hover:scale:105" v-for="(item, index) in responseValues" :key="index" :item="item"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.appearing-item {
  animation-name: appear;
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.grid > div {
  animation: card-appear 0.5s ease;
  animation-fill-mode: both;
}

@keyframes card-appear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.grid > div:nth-child(1) { animation-delay: 0.1s; }
.grid > div:nth-child(2) { animation-delay: 0.15s; }
.grid > div:nth-child(3) { animation-delay: 0.2s; }
.grid > div:nth-child(4) { animation-delay: 0.25s; }
.grid > div:nth-child(5) { animation-delay: 0.3s; }
.grid > div:nth-child(6) { animation-delay: 0.35s; }
.grid > div:nth-child(7) { animation-delay: 0.4s; }
.grid > div:nth-child(8) { animation-delay: 0.45s; }
.grid > div:nth-child(9) { animation-delay: 0.5s; }
.grid > div:nth-child(10) { animation-delay: 0.55s; }
.grid > div:nth-child(11) { animation-delay: 0.6s; }
.grid > div:nth-child(12) { animation-delay: 0.65s; }
.grid > div:nth-child(13) { animation-delay: 0.7s; }
.grid > div:nth-child(14) { animation-delay: 0.75s; }
.grid > div:nth-child(15) { animation-delay: 0.8s; }
.grid > div:nth-child(16) { animation-delay: 0.85s; }
.grid > div:nth-child(17) { animation-delay: 0.9s; }
.grid > div:nth-child(18) { animation-delay: 0.95s; }
.grid > div:nth-child(19) { animation-delay:  1s; }
.grid > div:nth-child(20) { animation-delay: 1.05s; }

</style>
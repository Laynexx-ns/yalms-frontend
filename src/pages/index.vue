<script setup lang="ts">
import {onMounted, ref} from "vue";
import Menu from "@/components/menu.vue";




const openedCalculator = ref<boolean>(false);
const showingData = ref<number>(0)

onMounted(()=>{
  const choosing = localStorage.getItem('choosing');
  openedCalculator.value = choosing === 'true';
})

const applyChangePage = (value : boolean) =>{
  localStorage.setItem('choosing', value);
  openedCalculator.value = value;
}

const handleUpdateShowingData = (value : number) =>{
  showingData.value = value
}

</script>

<template>

  <div class="min-h-screen w-full text-white">
    <div v-if="!openedCalculator" class="w-screen h-screen flex flex-col gap-6 items-center justify-center">
      <h1 class="appearing-item bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-bold text-6xl">xCalculator</h1>
      <span class="appearing-item text-sm text-white/50">мой небольшой кринжовый калькулятор</span>
      <button
          @click="applyChangePage(true)"
          class="bg-gradient-to-r font-semibold from-purple-400 to-pink-500 shadow-lg shadow-purple-500/20
        later-appearing-item text-sm px-8 rounded-full p-4 hover:scale-110 transition duration-300 text-white"
      >
        Запустить
      </button>
    </div>

    <Menu v-else @apply-change-page="applyChangePage" @update:showingData="handleUpdateShowingData"/>

  </div>
</template>

<style>

.appearing-item {
  animation-name: appear;
  animation-duration: 1s;
  animation-timing-function:ease;
}

.later-appearing-item {
  animation-name: later-appear;
  animation-duration: 1.2s;
  animation-timing-function: ease;
}

.card {
  @apply flex items-center gap-4 p-5 rounded-2xl bg-purple-400
  cursor-pointer transition-all duration-300 ;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transform: translateY(0);
}

.card::before {
  content: '';
  @apply absolute inset-0 bg-gradient-to-r  opacity-0 transition-opacity duration-500;
}


.card:hover {
  @apply scale-[1.05] shadow-xl bg-pink-500
}


@keyframes appear {
  from {
    opacity: 0;
    filter: blur(4px);
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    filter: none;
    transform: translateY(0);
  }
}

@keyframes later-appear {
  0% {
    opacity: 0;
    filter: blur(4px);
    transform: translateX(20px);
  }
  30% {
    opacity: 0;
    filter: blur(4px);
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    filter: none;
    transform: translateX(0);
  }
}


</style>
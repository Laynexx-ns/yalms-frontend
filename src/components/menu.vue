<script setup>
import {Clock8, Calculator} from "lucide-vue-next";
const emit = defineEmits(['applyChangePage', 'update:showingData'])



</script>

<template>
  <!-- menu buttons -->
  <div  class="w-screen h-screen flex flex-col gap-8 items-center justify-center p-4">
    <button
        @click="emit('applyChangePage', false)"
        class="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 absolute top-8"
    >Вернуться назад</button>

    <h2 class="appearing-item text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
      Тапай на действие
    </h2>


    <div class="card-container flex flex-col gap-4">
      <!--        card 1-->
      <RouterLink  to="/calculate">
        <div
            @click=""
            class=" card"
        >
          <Calculator/>
          <div
              class="flex-1 flex flex-col gap-1"
          >
            <span class="text-lg">Посчитать выражение</span>
            <span class="text-white/50">Отправить выражение в очередь</span>
          </div>
        </div>
      </RouterLink>


      <!--         card 2-->
      <RouterLink to="/expressions">
        <div
            class="card"
        >
          <Clock8/>
          <div
              class="flex-1 flex flex-col gap-1"
          >
            <span class="text-lg">История выражений</span>
            <span class="text-white/50"> История выражений и результаты</span>
          </div>
        </div>
      </RouterLink>


      <!--        card 3-->

      <RouterLink to="/queue">
        <div
            class="card"
        >
          <Calculator/>
          <div
              class="flex-1 flex flex-col gap-1"
          >
            <span class="text-lg">Очередь вычислений</span>
            <span class="text-white/50">Здесь могла быть ваша реклама</span>
          </div>
        </div>
      </RouterLink>

    </div>




  </div>
</template>

<style scoped>

@keyframes left-slide-appear {
  from{
    opacity: 0;
    filter: blur(4px);
    transform: translateX(20px);
  }
  to{
    opacity: 100;
    filter: none;
  }
}

</style>
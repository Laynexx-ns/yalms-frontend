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
            class="card animate-delay-1  transition-all shadow-xl bg-pink-500"
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
            class="card animate-delay-2  transition-all shadow-xl bg-pink-500"
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
            class="card animate-delay-3  transition-all shadow-xl bg-pink-500"
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
    transform: translateX(100px);
  }
  to{
    opacity: 100;
    filter: none;
  }
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

.card:hover{
  @apply scale-[1.05] transition-all shadow-xl bg-pink-500
}





.animate-delay-1{
  opacity: 0;
  animation-name: left-slide-appear;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: both;
}

.animate-delay-2{
  opacity: 0;
  animation-name: left-slide-appear;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-delay: 0.1s;
  animation-fill-mode: both;
}

.animate-delay-3{
  opacity: 0;
  animation-name: left-slide-appear;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-delay: 0.2s;
  animation-fill-mode: both;
}

</style>
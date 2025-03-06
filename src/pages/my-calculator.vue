<script setup lang="ts">
import {computed, ref} from "vue";
import axios from "axios";

const expression = ref<string>('')

const calculatedResponse = ref<string>();
const errorText = ref<string>();

const validate = computed(() => /^[0-9.+\-*/]+$/.test(expression.value))

const handleSendEvaluationRequest = async () =>{
  try{
    calculatedResponse.value = ''
    const response = await axios.post("http://localhost:8080/api/v1/calculate", {
      expression: expression.value
    })
    console.log(response)
    calculatedResponse.value = response
  } catch(e){
    console.error(e);
  }
}


</script>

<template>
  <RouterLink class="w-full flex justify-center items-center" to="/">
    <button
        class="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 absolute top-8"
    >Вернуться назад</button>
  </RouterLink>

  <div class="min-h-screen w-screen flex flex-col gap-8 items-center justify-center px-10 text-white transition-all">
    <div class="bg-block w-full max-w-sm rounded-3xl flex flex-col gap-4 p-6 transition-all">
      <span class="text-2xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-bold ">Калькулятор</span>
      <input v-model="expression" class="px-2 py-3 text-xl font-bold focus:ring-0 outline-none rounded-xl bg-[#09090b]"/>
      <span v-if="!validate" class="text-red-600">Строка может содержать только цифры и */-+</span>

      <div class="grid grid-cols-4 gap-2">
        <button @click="expression = ''" class="btn">C</button>
        <button @click="expression = ''" class="btn">CE</button>
        <button @click="expression = expression.slice(0, -1)" class="btn">-></button>
        <button @click="expression += '/'"  class="operator-btn">/</button>


        <button  @click="expression += '7'" class="btn">7</button>
        <button  @click="expression += '8'" class="btn">8</button>
        <button  @click="expression += '9'" class="btn">9</button>
        <button  @click="expression += '*'" class="operator-btn">*</button>


        <button  @click="expression += '4'" class="btn">4</button>
        <button @click="expression += '5'" class="btn">5</button>
        <button @click="expression += '6'" class="btn">6</button>
        <button @click="expression += '+'" class="operator-btn">+</button>


        <button @click="expression += '1'" class="btn">1</button>
        <button @click="expression += '2'" class="btn">2</button>
        <button @click="expression += '3'" class="btn">3</button>
        <button @click="expression += '-'" class="operator-btn">-</button>
      </div>
      <button @click="handleSendEvaluationRequest" :disabled="!validate" class="enter-button">=</button>
    </div>

    <div v-if="calculatedResponse" class="appearing-item bg-block w-full max-w-sm rounded-3xl flex flex-col gap-4 p-6">
      <span class="text-white/50">Успешно отправлено на вычисление</span>
      <RouterLink to="/expressions">
        <span class="text-bold">Просмотреть статус выполнения задачи</span>
      </RouterLink>
    </div>

    <div v-if="errorText" class="appearing-item bg-block w-full max-w-sm rounded-3xl flex flex-col gap-4 p-6">
      <span class="text-white/50">Возникла ошибка</span>
        <span class="text-bold">{{errorText}}</span>

    </div>

  </div>
</template>

<style scoped>

.btn{
  @apply bg-[#2C2C2E] rounded-2xl p-3 flex items-center justify-center font-medium transition-all hover:bg-[#3C3C3E] active:scale-95 text-lg;
  min-height: 3rem;
}

.operator-btn {
  @apply bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 rounded-2xl active:scale-90 transition-all;
}


.enter-button {
  @apply bg-gradient-to-r from-purple-400/50 to-pink-500/50 rounded-full py-2 transition-all duration-500 bg-[length:200%_200%];
  background-position: 0 50%;
}

.enter-button:disabled{
  @apply opacity-0
}

.enter-button:hover {
  background-position: 100% 50%;
  @apply from-purple-400 to-pink-500 scale-105 active:scale-90;
  //box-shadow: rgba(136, 57, 239, 0.5) 0 5px 10px;
}

</style>
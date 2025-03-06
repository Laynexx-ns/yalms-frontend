<script setup lang="ts">
import {onMounted, ref} from "vue";
import axios from "axios";


interface Response{
  ParentId: number,
  Arg1: number,
  Arg2: number
  Operation: string,
  Operation_time: number,
  Result: number,
}

const responseValues = ref<Response[]>();

onMounted(async ()=>{
  try{
    const response = await axios.get("http://localhost:8080/api/v1/queue");
    responseValues.value = response.data;
  } catch(e){
    console.error(e);
  }

})

</script>

<template>
  <RouterLink class="w-full p-6 md:p-12 flex justify-center items-center" to="/">
    <button
        class="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 absolute top-8"
    >Вернуться назад</button>
  </RouterLink>

  <div class="appearing-item min-h-screen w-screen flex flex-col gap-8 items-center justify-center px-10 text-white transition-all">
    <div class="bg-block w-full max-w-sm rounded-3xl flex flex-col gap-4 p-6 transition-all">
      <div
          v-for="(item, index) in responseValues"
          :key="index"
          class="flex items-center justify-center flex-col p-4">
        <div class="flex w-full justify-between">
          <span>Id</span>
          <span>{{item.Id}}</span>
        </div>
        <div class="flex w-full justify-between">
          <span>Status</span>
          <span>{{item.Status}}</span>
        </div>
        <div class="flex w-full justify-between">
          <span>Result</span>
          <span>{{item.Result}}</span>
        </div>

      </div>
    </div>

  </div>

</template>

<style scoped>

</style>
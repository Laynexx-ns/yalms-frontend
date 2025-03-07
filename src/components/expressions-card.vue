<script setup lang="ts">
import { Expression } from '@/types'

const props = defineProps<{ item: Expression }>()
</script>

<template>
  <div class="w-full rounded-3xl transform p-6 bg-purple-400 gap-4 flex flex-col transition-all duration-300 hover:scale-x-105">
      <div class="flex justify-between">
        <span class="subtext">Id</span>
        <span class="mainText">{{props.item.Id}}</span>
      </div>

      <div class="flex justify-between">
        <span class="subtext">Статус</span>
        <span class="mainText">{{props.item.Status}}</span>
      </div>

      <div class="flex justify-between">
        <span class="subtext">Результат</span>
        <span class="mainText">{{props.item.Result}}</span>
      </div>
  </div>
</template>

<style scoped>
.subtext{
  @apply text-sm text-white/50
}

.text{
  @apply text-lg text-white font-semibold
}
</style>
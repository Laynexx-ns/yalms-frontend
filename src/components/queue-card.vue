<script setup lang="ts">
import { QueueItem} from '@/types'

const props = defineProps<{ item: QueueItem }>()
</script>

<template>
  <div class="w-full rounded-3xl transform p-6 bg-purple-400 gap-4 flex flex-col transition-all duration-300 hover:scale-x-105">
    <div class="flex justify-between">
      <div class="flex items-center gap-1">
        <span class="subtext">Id</span>
        <span class="mainText">{{props.item.id}}</span>
      </div>

      <div class="flex items-center gap-1">
        <span class="subtext">parentId</span>
        <span class="mainText">{{props.item.parentId}}</span>
      </div>
    </div>

    <div class="flex justify-between">
      <span class="subtext">Операция</span>
      <span class="mainText">{{props.item.arg1.toString() + props.item.operation + props.item.arg2.toString() }}</span>
    </div>

    <div class="flex justify-between">
      <span class="subtext">Результат</span>
      <span class="mainText">{{props.item.result}}</span>
    </div>

    <span v-if="props.item.operation_time !=0" class="w-full rounded-2xl p-2 bg-green-200 font-bold text-center">выполнено</span>
    <span v-else class="w-full rounded-2xl p-2 bg-red-300 font-bold text-center">ошибка</span>
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
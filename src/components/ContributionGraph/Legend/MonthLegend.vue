<script lang="ts" setup>
import { eachMonthOfInterval, format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { onMounted, ref } from 'vue'
import { useContributionsStore } from '@/stores/ContributionsStore'

const store = useContributionsStore()

const monthNames = ref<string[]>([])
function calculateMonthLabels(): string[] {
  const months: Date[] = eachMonthOfInterval({ start: store.startDate, end: new Date() })

  return months.map((month: Date) => format(month, 'LLL', { locale: ru }))
}

onMounted(() => {
  monthNames.value = calculateMonthLabels()
})
</script>

<template>
  <div class="legend legend_row">
    <span v-for="(name, ind) in monthNames" :key="ind" class="legend__text">{{ name }}</span>
  </div>
</template>

<style scoped></style>

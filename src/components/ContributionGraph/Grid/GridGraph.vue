<script lang="ts" setup>
import GridElement from '@/components/ContributionGraph/Grid/GridElement.vue'
import { useContributionsStore } from '@/stores/ContributionsStore'
import { eachDayOfInterval, endOfWeek, formatISO } from 'date-fns'

const store = useContributionsStore()

const endOfCurrentWeek = endOfWeek(new Date(), { weekStartsOn: 1 })
const days = eachDayOfInterval({ start: store.startDate, end: endOfCurrentWeek }).map((day: Date) =>
  formatISO(day, { representation: 'date' })
)
</script>

<template>
  <div class="grid">
    <GridElement
      v-for="(date, key) in days"
      :key="key"
      :contributions="store.contributionData.value[date]"
      :date="date"
    />
  </div>
</template>

<style scoped>
.grid {
  width: max-content;
  display: grid;
  grid-template-rows: repeat(7, 15px);
  grid-template-columns: repeat(51, 15px);
  grid-auto-flow: column;
  gap: 2px;
}
</style>

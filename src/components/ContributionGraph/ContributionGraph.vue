<script lang="ts" setup>
import MonthLegend from '@/components/ContributionGraph/Legend/MonthLegend.vue'
import DayLegend from '@/components/ContributionGraph/Legend/DayLegend.vue'
import GridGraph from '@/components/ContributionGraph/Grid/GridGraph.vue'
import ColorLegend from '@/components/ContributionGraph/Legend/ColorLegend.vue'
import { useContributionsStore } from '@/stores/ContributionsStore'

const store = useContributionsStore()

const request = await fetch('https://dpg.gg/test/calendar.json')
if (request.ok) {
  store.contributionData.value = await request.json()
}
</script>

<template>
  <div class="graph">
    <DayLegend class="day-legend" />
    <MonthLegend class="month-legend" />
    <GridGraph class="grid-graph" />
    <ColorLegend class="color-legend" />
  </div>
</template>

<style scoped>
.graph {
  width: max-content;
  margin: 55px auto 57px;

  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(3, auto);
}

.day-legend {
  grid-row: 2;
  margin-right: 5px;
}

.month-legend {
  grid-column: 2;
  margin-bottom: 5px;
}

.grid-graph {
  grid-column: 2;
  grid-row: 2;
}

.color-legend {
  margin-top: 15px;
  grid-column: 2;
}
</style>

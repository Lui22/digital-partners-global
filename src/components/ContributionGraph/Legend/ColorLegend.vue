<script lang="ts" setup>
import GridElement from '@/components/ContributionGraph/Grid/GridElement.vue'
</script>

<template>
  <div class="legend legend_row legend_colors">
    <span>Меньше</span>

    <div class="legend-days">
      <GridElement contributions="0" label="No contributions" />
      <GridElement contributions="1" label="1-9 contributions" />
      <GridElement contributions="10" label="10-19 contributions" />
      <GridElement contributions="20" label="20-29 contributions" />
      <GridElement contributions="30" label="30+ contributions" />
    </div>

    <span>Больше</span>
  </div>
</template>

<style scoped>
.legend-days {
  display: flex;
  column-gap: 2px;
}

.legend_colors {
  justify-content: initial;
  column-gap: 8px;
  font-size: 8px;
  align-items: center;
}
</style>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import Tooltip from '@/components/TooltipComponent.vue'
import { format, parseISO } from 'date-fns'

const props = defineProps<{
  date?: string
  contributions?: number
  label?: string
}>()

const classList = computed(() => ({
  day_1: props.contributions > 0,
  day_10: props.contributions > 9,
  day_20: props.contributions > 19,
  day_30: props.contributions > 29,
  day_active: showTooltip.value
}))

const contributionsLabel = computed(() => {
  if (props.label) return props.label
  return (props.contributions ?? 'No') + ' contributions'
})
const dateLabel = computed(() => {
  if (!props.date) return null
  return format(parseISO(props.date), 'cccc, LLLL dd, yyy')
})

const showTooltip = ref<boolean>(false)
</script>

<template>
  <div :class="classList" class="day" @click="showTooltip = true" @mouseleave="showTooltip = false">
    <Tooltip v-if="showTooltip" :bottom-line="dateLabel" :upper-line="contributionsLabel" />
  </div>
</template>

<style scoped>
.day {
  position: relative;

  width: 15px;
  height: 15px;
  background: #ededed;

  outline: 1px solid rgba(0, 0, 0, 0);
  transition: outline-color 0.15s cubic-bezier(0.17, 0.84, 0.44, 1);
}

.day:hover {
  outline: 1px solid rgba(0, 0, 0, 0.5);
}

.day_active {
  outline: 1px solid rgba(0, 0, 0, 0.9) !important;
}

.day_1 {
  background: #acd5f2;
}

.day_10 {
  background: #7fa8c9;
}

.day_20 {
  background: #527ba0;
}

.day_30 {
  background: #254e77;
}
</style>

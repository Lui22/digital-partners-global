<script lang="ts" setup>
defineProps<{
  upperLine: string
  bottomLine?: string
}>()
</script>

<template>
  <div class="tooltip">
    <span class="tooltip__line tooltip__line_upper">{{ upperLine }}</span>
    <span class="tooltip__line tooltip__line_bottom">{{ bottomLine }}</span>
  </div>
</template>

<style scoped>
.tooltip {
  position: absolute;
  transform: translate(-50%, calc(-100% - 7px));
  left: 50%;
  z-index: 1;

  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
  padding: 5px 9px 6px;
  border-radius: 3px;
}

.tooltip:after {
  position: absolute;
  bottom: -6px;
  z-index: -1;
  width: 0;
  height: 0;
  content: '';
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 10px solid black;
}

.tooltip__line {
  width: max-content;
}

.tooltip__line_upper {
  color: #fff;
  font-size: 12px;
}

.tooltip__line_bottom {
  color: #7c7c7c;
  font-size: 10px;
}
</style>

<template>
  <div class="gauge">
    <div
      class="gauge-fill"
      :style="{
        '--value': -velocityY * 10 + '%',
        '--dynamic-color': dynamicColor
      }"
    >
    <span class="velocity">{{ -velocityY.toFixed() * 10 }}km</span>
  </div>
  </div>
</template>

<script setup lang="ts">
import { useRocket } from '~/composables/games/spacelander/useRocket'

const { velocityY } = useRocket()


const dynamicColor = computed(() => {
  const v = -velocityY.value * 10

  if (v < 25) return 'green'
  if (v < 45) return 'orange'
  return 'red'
})
</script>

<style scoped>
.gauge {
  width: 50px;
  height: 25px; 
  overflow: hidden;
}

.gauge-fill {
  width: 100%;
  height: 50px; 
  border-radius: 100%;
  background: conic-gradient(
    var(--dynamic-color) calc(var(--value)),
    #ddd calc(var(--value))
  );
  transform: rotate(-90deg);
}

.velocity {
  position: absolute;
  top: 50%;
  left: 65%;
  transform: translate(-50%, -50%) rotate(90deg);
  color: #000;
  font-size: 12px;
  font-weight: 700;
}
</style>

<template>
  <div class="game-canvas">
    <canvas ref="canvas" width="400" height="600" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRocket } from '~/composables/games/spacelander/useRocket'

const canvas = ref<HTMLCanvasElement | null>(null)
const { loopFn, rocket, keys } = useRocket()

let ctx: CanvasRenderingContext2D | null = null
let loop: number

const drawRocket = () => {
  if (!ctx) return
  const r = rocket.value
  // Corps
  ctx.fillStyle = "#ffffff"
  ctx.fillRect(r.x, r.y, r.width, r.height)
  // Nez
  ctx.beginPath()
  ctx.moveTo(r.x, r.y)
  ctx.lineTo(r.x + r.width, r.y)
  ctx.lineTo(r.x + r.width / 2, r.y - 12)
  ctx.closePath()
  ctx.fill()
  // Cockpit
  ctx.fillStyle = "#4fc3f7"
  ctx.beginPath()
  ctx.ellipse(r.x + r.width / 2, r.y + 10, 6, 8, 0, 0, Math.PI*2)
  ctx.fill()
  // Ailettes
  ctx.fillStyle = "#888"
  ctx.fillRect(r.x-6, r.y+20, 6, 12)
  ctx.fillRect(r.x + r.width, r.y+20, 6, 12)
}

const draw = () => {
  if (!ctx) return
  ctx.clearRect(0, 0, 400, 600)
  // Sol
  ctx.fillStyle = "#444"
  ctx.fillRect(0, 580, 400, 20)
  drawRocket()
}

onMounted(() => {
  if (!canvas.value) return
  ctx = canvas.value.getContext('2d')
  window.addEventListener('keydown', (e) => keys[e.key]=true)
  window.addEventListener('keyup', (e) => keys[e.key]=false)
  loop = requestAnimationFrame(function loopFrame() {
    loopFn()
    draw()
    loop = requestAnimationFrame(loopFrame)
  })
})

onBeforeUnmount(() => {
  cancelAnimationFrame(loop)
})
</script>

<style scoped lang="scss">
.game-canvas {
  
}
</style>
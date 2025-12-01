<template>
  <div class="game-canvas">
    <canvas ref="canvas" width="400" height="600" />
  </div>
</template>

<script setup lang="ts">
import { useRocket } from '~/composables/games/spacelander/useRocket'

const canvas = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let loop = 0
let rocketImg: HTMLImageElement

const { loopFn, rocket, keys, gameOver, win } = useRocket()

const rocketLoaded = ref(false)

onMounted(() => {
  if (!canvas.value) return
  ctx = canvas.value.getContext('2d')

  rocketImg = new Image()
  rocketImg.src = "/games/spaceLander/rocket.png"
  
  rocketImg.onload = () => {
    rocketLoaded.value = true
    loop = requestAnimationFrame(loopFrame)
  }

  const onKeyDown = (e: KeyboardEvent) => keys[e.key] = true
  const onKeyUp = (e: KeyboardEvent) => keys[e.key] = false

  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup', onKeyUp)

  onBeforeUnmount(() => {
    cancelAnimationFrame(loop)
    window.removeEventListener('keydown', onKeyDown)
    window.removeEventListener('keyup', onKeyUp)
  })
})

const drawRocket = () => {
  if (!ctx || !rocketLoaded.value) return
  
  const r = rocket.value
  ctx.drawImage(rocketImg, r.x, r.y, r.width, r.height)
}

const draw = () => {
  if (!ctx) return
  ctx.clearRect(0, 0, 400, 600)

  ctx.fillStyle = "#444"
  ctx.fillRect(0, 580, 400, 20)

  drawRocket()
}

const loopFrame = () => {
  loopFn()
  draw()
  loop = requestAnimationFrame(loopFrame)
}

watch(gameOver, () => {
  rocketImg.src = !win.value ?  "/games/spaceLander/explosed.png" : "/games/spaceLander/rocket.png" 
})
</script>


<style scoped>
.game-canvas canvas {
  display: block;
  margin: 0 auto;
  background: #000;
}
</style>

const rocket = ref({ x: 200, y: 50, width: 60, height: 90 })
const velocityX = ref(0)
const velocityY = ref(0)
const fuel = ref(100)
const gameOver = ref(false)
const message = ref('')
const win = ref(false)
const keys = reactive<Record<string, boolean>>({})

const gravity = 0.07
const thrust = -0.35
const horizontalSpeed = 2

export function useRocket() {
  const loopFn = () => {
    if (gameOver.value) return
    velocityY.value += gravity
    if (keys.ArrowUp && fuel.value > 0) {
      velocityY.value += thrust
      fuel.value -= 0.3
    }
    if (keys.ArrowLeft) rocket.value.x -= horizontalSpeed
    if (keys.ArrowRight) rocket.value.x += horizontalSpeed
    rocket.value.y += velocityY.value

    if (rocket.value.y + rocket.value.height >= 580) {
      rocket.value.y = 580 - rocket.value.height
      win.value = velocityY.value < 1.5 ? true : false
      gameOver.value = true
    }
  }

  const resetGame = () => {
    rocket.value = { x: 200, y: 50, width: 60, height: 90 }
    velocityX.value = 0
    velocityY.value = 0
    fuel.value = 100
    gameOver.value = false
    win.value = false
    Object.keys(keys).forEach(k => keys[k] = false)
  }

  return { rocket, velocityX, velocityY, fuel, gameOver, win, keys, loopFn, resetGame }
}

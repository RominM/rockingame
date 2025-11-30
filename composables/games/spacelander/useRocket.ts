import { ref } from 'vue'

export function useRocket() {
  const rocket = ref({ x: 200, y: 50, width: 20, height: 40 })
  const velocityX = ref(0)
  const velocityY = ref(0)
  const fuel = ref(100)
  const gameOver = ref(false)
  const message = ref('')
  const keys: Record<string, boolean> = {}

  const gravity = 0.15
  const thrust = -0.35
  const horizontalSpeed = 2

  const update = () => {
    if (gameOver.value) return

    velocityY.value += gravity
    if (keys["ArrowUp"] && fuel.value > 0) {
      velocityY.value += thrust
      fuel.value -= 0.3
    }

    if (keys["ArrowLeft"]) rocket.value.x -= horizontalSpeed
    if (keys["ArrowRight"]) rocket.value.x += horizontalSpeed

    rocket.value.x += velocityX.value
    rocket.value.y += velocityY.value

    if (rocket.value.x < 0) rocket.value.x = 0
    if (rocket.value.x > 380) rocket.value.x = 380

    if (rocket.value.y + rocket.value.height >= 580) {
      rocket.value.y = 580 - rocket.value.height
      if (velocityY.value < 1.5) {
        gameOver.value = true
        message.value = "Atterrissage réussi 🚀"
      } else {
        gameOver.value = true
        message.value = "Crash 💥"
      }
    }
  }

  const resetGame = () => {
    rocket.value = { x: 200, y: 50, width: 20, height: 40 }
    velocityX.value = 0
    velocityY.value = 0
    fuel.value = 100
    gameOver.value = false
    message.value = ""
  }

  const loopFn = () => update()

  return { rocket, velocityX, velocityY, fuel, gameOver, message, keys, resetGame, loopFn }
}

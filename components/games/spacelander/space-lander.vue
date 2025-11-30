<template>
  <div class="space-lander">
    <div class="game-screen">
      <GameCanvas />
      <GameHUD />
    </div>
    <button :disabled="!gameOver" @click="resetGame">Rejouer</button>
  </div>
</template>

<script setup lang="ts">
import { useRocket } from '~/composables/games/spacelander/useRocket';

const {
  gameOver,
  resetGame
} = useRocket()
</script>

<style scoped lang="scss">
.space-lander {
  .game-screen{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid #fff 1px;
    border-radius: 8px;
    overflow: hidden;
  }
}
</style>
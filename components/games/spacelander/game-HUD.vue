<template>
  <div class="game-HUD">
    <p>Fioul : {{ fuel.toFixed(2) }}/100</p>
    <p>Vitesse Y : {{ velocityY.toFixed(2) }}</p>
    <p v-if="gameOver">{{ message }}</p>
    <button v-if="gameOver" @click="resetGame">Rejouer</button>
  </div>
</template>

<script setup lang="ts">
import { useRocket } from '~/composables/games/spacelander/useRocket';

const { fuel, velocityY, gameOver, message, resetGame } = useRocket()
</script>

<style scoped lang="scss">
.game-HUD {
  margin-top: 10px;
  color: white;
  text-align: center;
  font-family: monospace;
}
</style>
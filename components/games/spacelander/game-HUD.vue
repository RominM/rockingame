<template>
  <div class="game-HUD">
    <life id="life" />
    <level id="level"/>
    <fuel-tank id="fuel" />
    <speed id="speed" />
    <p v-if="gameOver" class="game-over">{{ win ? "You win" : "You loose" }}</p> 
  </div>
</template>

<script setup lang="ts">
import { useRocket } from '~/composables/games/spacelander/useRocket';

const {
  gameOver,
  win,
} = useRocket();
</script>

<style scoped lang="scss">
.game-HUD {
  position: absolute;
  inset: 0;
  #level {
    position: absolute;
    top: 10px;
    right: 15px;
  }
  #life {
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #fuel {
    position: absolute;
    bottom: 82px;
    left: -50px;
    transform: translate(-50%, -50%);
    transform: rotate(-90deg);
  }
  #speed {
    position: absolute;
    bottom: 25px;
    right: 10px;
  }
  .game-over{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: red;
    font-weight: bold;
    font-size: 32px;
  }
}
</style>

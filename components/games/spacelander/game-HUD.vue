<template>
  <div class="game-HUD">
    <life id="life" />

    <fuel-tank id="fuel-tank" />
    <p id="speed">
      <h-icon :icon="DashboardSpeed01Icon" />
      Vitesse : {{ velocityY.toFixed(2) }}
    </p>
    <p v-if="gameOver">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { DashboardSpeed01Icon } from '@hugeicons/core-free-icons';
import { useRocket } from '~/composables/games/spacelander/useRocket';

const {
  velocityY,
  gameOver,
  message,
} = useRocket()
</script>

<style scoped lang="scss">
.game-HUD {
  position: absolute;
  inset: 0;

//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
// grid-template-rows: repeat(2, 1fr);
// grid-column-gap: 0px;
// grid-row-gap: 0px;

  margin-top: 10px;
  color: white;
  text-align: center;
  font-family: monospace;
  border: solid 1px red;
}

#life { 
  grid-area: 1 / 1 / 2 / 3; 
}
#fuel-tank {
  position: absolute;
  bottom: 120px;
  // grid-area: 2 / 1 / 3 / 2; 
  // width: 15px;
}
#speed { grid-area: 2 / 2 / 3 / 3; }
</style>
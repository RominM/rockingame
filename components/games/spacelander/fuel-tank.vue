<template>
  <div class="fuel-tank">
    
    <label class="fuel-tank__label">
      <!-- <span>{{ fuel.toFixed() }}/100</span> -->
      <input 
      class="fuel-tank__label__input" 
      type="range" 
      max="100" 
      :value="fuel"
      @input="updateFuel($event)"
      :style="sliderStyle"
      />
    </label>
    <h-icon :icon="PetrolPumpIcon" />
  </div>
</template>

<script setup lang="ts">
import { PetrolPumpIcon } from '@hugeicons/core-free-icons';
import { computed } from 'vue';
import { useRocket } from '~/composables/games/spacelander/useRocket';

const { fuel } = useRocket();

// Crée un style dynamique pour le gradient
const sliderStyle = computed(() => {
  const percent = fuel.value; // 0 à 100
  return {
    background: `linear-gradient(to right, 
      #ffeb3b 0%,      /* jaune */
      #ff9800 ${percent * 0.6}%, /* orange */
      #f44336 ${percent}%,       /* rouge */
      transparent ${percent}%)`
  };
});

// Optionnel : pour rendre le slider réactif si tu veux update fuel via input
function updateFuel(e: Event) {
  const target = e.target as HTMLInputElement;
  fuel.value = Number(target.value);
}
</script>

<style scoped lang="scss">
.fuel-tank {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;


  &__label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex: 1;

    span {
      width: 3rem;
      text-align: right;
      font-weight: bold;
    }

    &__input {
      -webkit-appearance: none;
      width: 100%;
      height: 18px;
      border: solid 1px;
      border-radius: 2px;
      outline: none;
        transform: rotate(-90deg);
  transform-origin: 50% 50%;
      transition: background 0.3s;
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
      }
      
      &::-moz-range-thumb {
        -webkit-appearance: none;
      }
    }
  }
}
</style>

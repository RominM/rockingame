<template>
  <div class="life">
    <h-icon :icon="StartUp01Icon" />
    <h-icon :icon="StartUp01Icon" />
    <h-icon :icon="StartUp01Icon" />
  </div>
</template>

<script setup lang="ts">
import { StartUp01Icon } from '@hugeicons/core-free-icons';

</script>

<style scoped lang="scss">
.life {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
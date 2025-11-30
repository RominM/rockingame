<template>
  <div class='default-layout'>
    <navbar />
    <div class='default-layout__content'>
      <slot />
    </div>
  </div>
</template>

<script setup lang='ts'>
import navbar from '~/components/navbar.vue';
</script>

<style lang='scss' scoped>
  .default-layout{
    max-width: 100%;
    height: 100vh;
    background-color: $dark-background;
    color: $dark-text-primary;
    &__content {
      height: calc(100dvh - 180px);
    }
  }
</style>
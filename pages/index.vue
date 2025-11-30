<template>
    <div class='index'>     
        MAIN PAGE
        <h-icon :icon="AiChipIcon" />
        <space-lander />
    </div>
</template>

<script setup lang='ts'>
import { AiChipIcon } from '@hugeicons/core-free-icons';
</script>

<style lang='scss' scoped>
    .index{
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
    }
</style>
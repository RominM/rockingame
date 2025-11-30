<template>
    <div class='contact'>     
        CONTACT PAGE
        <h-icon :icon="AiChipIcon" />
    </div>
</template>

<script setup lang='ts'>
import { AiChipIcon } from '@hugeicons/core-free-icons';
</script>

<style lang='scss' scoped>
    .contact{
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
    }
</style>
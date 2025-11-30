<template>
    <div class='private'>     
        PRIVATE ROUTE
        <h-icon :icon="AiChipIcon" />
        <button @click="isOpen = true">Open</button>
        <modal v-model="isOpen" title="Testing Modal" min-width="450px" max-width="650px" dismisable show-cross>
          Use slot here
        </modal>
    </div>
</template>

<script setup lang='ts'>
import { AiChipIcon } from '@hugeicons/core-free-icons';

const isOpen = ref(false)
</script>

<style lang='scss' scoped>
    .private{
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
    }
</style>
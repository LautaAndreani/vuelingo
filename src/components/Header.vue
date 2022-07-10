<template>
    <header class="header">
        <img src="../assets/close.svg" alt="close-icon" class="header-icon">
        <span class="progress">
            <span class="progress-bar"></span>
        </span>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {

    }
})
</script>

<style scoped>
.header {
    width: 90%;
    margin: 0 auto;
    padding: 2rem auto;
    display: flex;
    align-items: center;
    height: 3rem;
}

.header-icon {
    width: 2rem;
    margin-right: 1rem;
    cursor: pointer;
}

.progress {
    min-width: 90%;
    height: 1rem;
    background: var(--progress-bg);
    border-radius: 10px;
    display: flex;
}

.progress-bar {
    min-width: 10%;
    height: 1rem;
    background: var(--progress);
    border-radius: 10px;
    transition: .3s ease-in-out;
}
</style>

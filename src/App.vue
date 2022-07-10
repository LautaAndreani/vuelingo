<template>
  <Header />
  <div v-for="question in questions" :key="question.id" class="container">
    <Content :question="question" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
import { exercises } from "./mock/exercises"
import { Exercise } from './models/types'

export default defineComponent({
  components: { Header, Content },
  setup() {
    const questions = ref<Exercise[]>(exercises)

    return { questions }
  },
})
</script>

<style scoped>
.container {
  color: var(--text);
  min-width: 100%;
  height: 85vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

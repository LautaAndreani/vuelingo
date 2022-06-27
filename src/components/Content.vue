<template>
    <div class="wrapper">
        <div class="content">
            <h2 class="content-header">{{ question.title }}</h2>
            <p class="content-exercise" v-html="parserText(question.text)" />
            <div v-for="(choice, index) in question.choices" :key="index" class="options">
                <options @selectVal="handleSelect" :choice="choice" :options="index" />
            </div>
        </div>
        <Footer :correctAnswer="question" :option="selected"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { Exercise } from '../models/types'
import Options from './Options.vue'
import Footer from './Footer.vue'

export default defineComponent({
    components: { Options, Footer },
    props: {
        question: { type: Object as PropType<Exercise>, required: true }
    },
    setup() {
        const selected = ref<string>('')

        const handleSelect = (val:string):string => selected.value = val
        const parserText = (text: string) => text.includes("<complete>") ? text.replace("<complete>", "_______") : text

        return { parserText, handleSelect, selected }
    },
})
</script>

<style>
.content {
    text-align: left;
    min-width: 40%;
    max-width: 40%;
    padding: 1rem;
    margin: auto;
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
}

.content-exercise {
    font-family: 'RoundPro';
    margin: 2rem 0;
    font-weight: 400;
    font-size: 1.3rem;
    letter-spacing: -.02rem;
}
</style>

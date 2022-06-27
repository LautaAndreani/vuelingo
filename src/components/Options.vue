<template>
    <button @click="select(choice)" class="option" :class="isActive ? 'isActive' : ''">
        <span class="option-btns">
            <small class="option-index">{{ options + 1 }}</small>
            <div class="option-text">
                <span>{{ choice }}</span>
            </div>
        </span>
    </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    emits: ['selectVal'],
    props: {
        choice: { type: String, required: true },
        options: { type: Number, default: 1 }
    },
    setup(props, {emit}) {
        const isActive = ref<boolean>(false)
        const userOption = ref<string[]>([])

        const select = (choice: string) => {
            isActive.value = !isActive.value
            userOption.value.push(choice)
            userOption.value[0] === props.choice && document.querySelector(".isActive")?.classList.remove("isActive")
            emit("selectVal", choice)
        }

        return { isActive, select }
    },
})
</script>

<style scoped>
.option {
    font-family: RoundPro;
    max-height: 4rem;
    font-weight: 500;
    font-size: 1rem;
    margin-top: 1rem;
    width: 100%;
    background: none;
    border: 2px solid gray;
    padding: 10px 20px;
    border-radius: 10px;
    color: var(--text);
    cursor: pointer;
}

.option:active {
    background: rgb(39, 39, 39);
}

.option-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 55%;
}

.option-index {
    border: 2px solid gray;
    padding: 5px 10px;
    border-radius: 10px;
}

.option-text {
    min-width: 3rem;
    text-align: center;
}

.isActive {
    border: 2px solid var(--active-border);
    background: var(--active-option);
    color: #2EB0ED;
    transition: .1s ease-in-out;
}

.isActive>span>small {
    border-color: var(--active-border);
}
</style>

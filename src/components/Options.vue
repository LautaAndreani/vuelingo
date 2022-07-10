<template>
    <button @click="select(choice)" class="option">
        <span class="option-btns">
            <small class="option-index">{{ options + 1 }}</small>
            <div class="option-text">
                <span>{{ choice }}</span>
            </div>
        </span>
    </button>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
    emits: ['selectVal'],
    props: {
        choice: { type: String, required: true },
        options: { type: Number, default: 1 }
    },
    setup(props, { emit }) {
        const isActive = ref<boolean>(false)
        const userOption = ref<string[]>([])

        const select = (choice: string) => {
            const getAllOptions = document.querySelectorAll(".option-text") as any
            const getAllBtns = document.querySelectorAll(".option")
            for (let i = 0; i < getAllOptions.length; i++) {
                getAllOptions[i].innerText === choice ? getAllBtns[i].classList.add("isActive") : getAllBtns[i].classList.remove("isActive")
            }
            userOption.value.push(choice)
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

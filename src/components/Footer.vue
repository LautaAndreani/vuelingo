<template>
    <footer class="footer">
        <div class="footer-container">
            <button :disabled="!option" :class="{ 'disabled-btn': !option, 'footer-btn': option }" @click="handleClick">
                COMPROBAR
            </button>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { correctAnswer } from '../models/types'
import { createToast } from 'mosha-vue-toastify'
import fail from '../assets/sounds/fail.mp3'
import success from '../assets/sounds/success.mp3'

export default defineComponent({
    props: {
        option: String,
        correctAnswer: { type: Object as PropType<correctAnswer> },
    },
    setup(props) {
        const handleClick = () => props.correctAnswer?.choices[props.correctAnswer?.correctIndex] === props.option ? onGetResult(true) : onGetResult(false)
        const onGetResult = (result: boolean) => {
            if (result) {
                createToast('Nice Work !', { type: 'success', toastBackgroundColor: '#5fdd05', showIcon: true })
                return new Audio(success).play()
            } else {
                createToast('Try again 🙈', { type: 'danger', showIcon: true })
                new Audio(fail).play()
            }
        }

        return { handleClick }
    },
})
</script>

<style scoped>
.footer {
    border-top: 1px solid gray;
    padding: 1.2rem 0;
    width: 100%;
    min-height: 3rem;
    margin-bottom: -6rem;
}

.footer-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
}

.footer-btn {
    color: white;
    font-family: RoundPro;
    font-weight: 600;
    font-size: 1rem;
    padding: 15px 30px;
    border-radius: 15px;
    background: var(--button-bg);
    border: none;
    cursor: pointer;
    border-bottom: 4px solid var(--button-shadow);
}

.footer-btn:hover {
    background: var(--button-hover);
}

.footer-btn:active {
    margin-top: 0.2rem;
    border: none;
}

.disabled-btn {
    color: white;
    font-family: RoundPro;
    font-weight: 600;
    font-size: 1rem;
    padding: 15px 30px;
    border-radius: 15px;
    background: gray;
    border: none;
    cursor: pointer;
    border-bottom: 4px solid lightgray;
    cursor: not-allowed;
}
</style>

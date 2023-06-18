<script setup>
import { useRoute } from 'vue-router'
import { ref, watch, computed } from 'vue'
import quizez from '../data/quizes.json'
import Question from '../components/Question.vue'
import QuizHeader from '../components/QuizHeader.vue'
import Result from '../components/Result.vue'
const route = useRoute()

const currentQuestionIndex = ref(0)
const quiz = quizez.find((q) => q.id === parseInt(route.params.id))

// const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`)
// watch(() => currentQuestionIndex.value, () => {
//     questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`
// })
const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)
const barPercentage = computed(() => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`)

const correctAnswers = ref(0)
const showResults = ref(false)
const onOptionSelected = (isCorrect) => {
    if (isCorrect) {
        correctAnswers.value++
    }
    if (quiz.questions.length - 1 === currentQuestionIndex.value) {
        showResults.value = true
    }
    currentQuestionIndex.value++
}
</script>
<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
        <div>
            <Question v-if="!showResults" :question="quiz.questions[currentQuestionIndex]"
                @selectOption="onOptionSelected" />
            <Result v-else :quizQuestionLength="quiz.questions.length" :correctAnswers="correctAnswers" />
        </div>
    </div>
</template>


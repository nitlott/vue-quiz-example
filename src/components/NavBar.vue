<script setup>
import { RouterLink } from 'vue-router'

</script>
<template>
    <div class="container">
        <!-- <RouterLink active-class="active" to="/">Home</RouterLink> -->
        <RouterLink class="inactive" active-class="active" to="/quiz">Quizes</RouterLink>
    </div>
</template>

<style scoped>
.active {
    font-weight: 900;
    color: #fff !important;
}

.inactive {
    font-weight: 900;
    color: #999;
}

.container {
    max-width: 100px;
    margin: 0 auto;

}
</style>

<script setup>
import { ref } from 'vue';

const message = ref("")
//寫ref之後直接按Tab鍵 會自動跑上方的那一行(import { ref } from 'vue';)

</script>

<template>
    <input type="text" v-model="message">
    <h3>Hello {{ message }} </h3>
</template>

<style scoped>
h3{
    color: thistle;
}
</style>

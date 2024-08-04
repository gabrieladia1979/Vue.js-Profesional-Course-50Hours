<template>  
    <h1 v-if="age < 18"> Eres mayor de edad </h1>
    <h1 v-else = "age >= 18"> Eres menor de edad </h1>
</template>

<script lang="ts" setup>
    let age = 17;
</script>

<style scoped>
</style>
<template>  
    <p v-bind:class =" {danger: hasError}">Esto es un mensaje de error</p>
</template>

<script lang="ts" setup>
    let hasError = true;
</script>

<style scoped>
.danger {
    color: red;
}
</style>
<template>
    <p v-bind:style = "{backgroundColor : '#ccc' , color:c}">El mensaje fue enviado correctamente</p>
    <button @click="handleClick()">Cambiar de Color</button>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    let c  = ref("#fff") 
    const handleClick = () => {
        c.value = '#ff0000'
    }
</script>

<style scoped>

</style>
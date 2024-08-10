<template>
    <div class="post"> 
        <h1>{{ title }}</h1> <!-- Accede a la prop 'title' -->
        <p>{{ content }}</p> <!-- Accede a la prop 'content' -->
    </div>
</template>

<script lang="ts" setup>
    import { defineProps , Ref } from 'vue'; // Importa la función defineProps de Vue
    // Define las props para el componente
    const props = defineProps({
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: false,
            default: 'No hay contenido en este post',
        },
    });
</script>

<style scoped>
.post {
    width: 300px;
    height: auto;
    background-color: yellowgreen;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
}
</style>

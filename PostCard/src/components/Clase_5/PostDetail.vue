<template>
    <div class="post"> 
        <h1>{{ props.title }}</h1> <!-- Accede a la prop 'title' -->
        <p>{{ props.content }}</p> <!-- Accede a la prop 'content' -->
        <button v-on:click = 'handleClick'> Di Hola </button>
    </div>
</template>

<script lang="ts" setup>
    import { defineProps, defineEmits } from 'vue'; // Importa la función defineProps de Vue
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

    const emits = defineEmits(['sayHi']); // Define el evento showAlert

    const handleClick = () => {
        emits('sayHi', 'Hiciste clic en el post: ${props.title}');
    };

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

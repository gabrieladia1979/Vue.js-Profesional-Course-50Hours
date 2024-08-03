<template>
    <div>
        <h1 class="post-list-title">Listado de Post:</h1>
        <div class="post-conteiner">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
    </div>
</template>

<script lang="ts" setup>
import PostCard from './PostCard.vue';
</script>

<style scoped>
.post-conteiner {
    width: 100%;
    display: flex;        /* Restauramos flexbox */
    flex-wrap: wrap;      /* Para que los elementos pasen a la siguiente línea si es necesario */
    gap: 16px;            /* Añade un espacio uniforme entre las tarjetas */
    justify-content: space-around; /* Distribuye uniformemente las tarjetas */
    margin-top: 20px;     /* Espacio entre el título y las tarjetas */
}

.post-list-title {
    font-size: 24px;
    font-weight: bold;
    color: #4CAF50;
    margin-bottom: 20px;  /* Espacio inferior al título */
    text-align: center;   /* Centrar el título */
}
</style>
<template>  
    <div class="post-card">
        <h2>Titulo</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem sit esse enim dolores tempore quam similique, unde in et, necessitatibus deleniti optio minima corrupti quidem quis tenetur. Illo, similique?</p>
        <PostBotton />
    </div>
</template>

<script lang="ts" setup>    
    import PostBotton from './Clase_1/PostBotton.vue'; 
</script>

<style scoped>
    .post-card {
        background-color: #f9f9f9;
        border: 1px solid #b9b7b7;
        padding: 20px;
        margin: 20px;
        border-radius: 5px;
    }
</style>
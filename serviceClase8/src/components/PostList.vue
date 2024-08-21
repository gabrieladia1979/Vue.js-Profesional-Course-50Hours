<template>
  <h1>Post List</h1>
  <ul class = 'post-list'>
    <li v-for = 'post in post' :key = 'post.id'>
      {{ post.title }}
    </li>
  </ul>

</template>

<script lang="ts" setup>

    import PostService from '@/services/PostService';
    import { ref, Ref , onMounted } from 'vue';

    const service = new PostService(); // Instancia de la clase PostService.
    const post = service.getPosts(); // Traigo los post del servicio.

    onMounted  ( async() => {
    
      await service.fetchAllPosts(); // Aca
    
    })

</script>

<style scoped>

</style>
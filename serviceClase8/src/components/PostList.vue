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
    import {onMounted } from 'vue';

    const service = new PostService(); // Instancia de la clase PostService.
    const post = service.getPosts(); // Traigo los post del servicio.

    onMounted  ( async() => {
    
      await service.fetchAllPosts(); // Aca
    
    })

</script>

<style scoped lang="scss">

    //$red: red;

    .post-list {
      width: 95%;
      height: 75px;
      list-style-type: none;
      padding: 20px;
    }

    .post-list li {
      background-color: #f9f9f9;
      margin: 10px;
      padding: 10px;
      border-radius: 50px;
      
    }
</style>
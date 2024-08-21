<template>
  <div>Hola mundo</div> //falta hacer el v-for
</template>

<script lang="ts" setup>
    import PostService from '@/services/PostService';
    import { ref, Ref , onMounted } from 'vue';

    const service = new PostService(); 
    const post = service.getPosts();

    onMounted  ( async() => {
    
      await service.fetchAllPosts();
    
    })

</script>

<style scoped>

</style>
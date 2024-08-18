<template>
    <div>
         <h1>Detalle de Posts</h1>
         
         <ul>
             <li v-for="post in posts" :key="post.id">

                 <h2>{{ post.title }}</h2>
                 <p>{{ post.body }}</p>
             
                </li>
         </ul> 
    </div>
 </template>
 

 <script lang="ts" setup>
    import { ref, Ref, onMounted } from 'vue';
    import axios from 'axios';
 
 interface Post {
     id: number;
     title: string;
     body: string;
 }

 const posts: Ref<Post[]> = ref([]); // Cambia esto para que sea un array de posts.

 const fetchPosts = async () => {
    
    try {
    
         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
         posts.value = response.data; // Asigna el array completo de posts.
    
        } 
    
    catch (error) {
      
         console.error('Error al obtener los datos', error);
    
    }
 }

 onMounted(fetchPosts); // Llama a fetchPosts cuando el componente se monte.

</script>

<style scoped>

</style>
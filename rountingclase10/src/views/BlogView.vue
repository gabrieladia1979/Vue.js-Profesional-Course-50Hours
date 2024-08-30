<template>
  <div>
    <h1>Blog Section</h1>
    <ul>
      <li>
        <router-link :to="{name: 'post' , params: {id:1}}">Primer Post</router-link>
      </li>
      <li>
        <router-link :to="{name: 'post' , params: {id:2}}"</router-link>
      </li>
      <li>
        <router-link :to="{name: 'post' , params: {id:3}}">Post 3</router-link>
      </li> 
      <li>
        <router-link :to="{name: 'post' , params: {id:4}}">Post 4</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
    
</script>

<style scoped>

</style>
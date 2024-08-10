<template>
  <div class = 'conteiner'>
    <PostList />
    <PostList />
    <PostList />
    <PostList />
    <PostList />
  </div>
</template>

<script lang="ts" setup>
    import PostList from './PostDetail.vue' 
</script>

<style scoped>

.conteiner{
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-wrap: wrap;
    flex-direction: row;

}

</style>
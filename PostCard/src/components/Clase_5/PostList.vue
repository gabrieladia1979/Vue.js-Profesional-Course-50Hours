<template>
  <div class = 'conteiner'>
    <PostList v-for = 'elem in info' :key = 'elem.title' :title = 'elem.title' :content = 'elem.content'/>
  </div>
</template>

<script lang="ts" setup>
    import PostList from './PostDetail.vue' 

    interface Post{
        title: string;
        content: string;
    }

    let info:Array<Post> = [
    
        {
            title: 'Este es el post 1',
            content : 'Texto del ejemplo 1'
        },

        {
            title: 'Este es el post 2',
            content : 'Texto del ejemplo 2'
        },

        {
            title: 'Este es el post 3',
            content : 'Texto del ejemplo 3'
        },

        {
            title: 'Este es el post 4',
            content : 'Texto del ejemplo 4'
        },

        {
            title: 'Este es el post 5',
            content : 'Texto del ejemplo 5'
        }

    ]

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
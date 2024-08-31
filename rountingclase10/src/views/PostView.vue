<template>
  <div>
    <h1>Post View {{postId}}</h1>
  </div>
</template>

<script lang="ts" setup>
    import { onMounted } from 'vue'; // Quiero obtener esa información cuando el componente sea montado.
    import { useRoute } from 'vue-router'; // Nos permite acceder a la informacion de la ruta y acederemos a los parametros que nos llegan por la url
    import {ref} from 'vue'; // Importamos ref para poder utilizarlo
    
    const postId = ref(); // Creamos una variable postId que va a ser reactiva
    
    onMounted(() => { // Como recuperamos los datos que estan llegando ? -> hooks a datos que nos estan llegando
        const route = useRoute(); // useRoute nos permite acceder a la informacion de la ruta
        postId.value = route.params.id; // Accedemos a los parametros que nos llegan por la url
    });
</script>)

<style scoped>

</style>
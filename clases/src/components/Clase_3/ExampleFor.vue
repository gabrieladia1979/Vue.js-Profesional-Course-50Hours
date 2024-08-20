<template>  
    <ul>
        <li v-for = "country in countries" :key = "country.code" >{{country.name}}</li>
    </ul>
</template>

<script lang="ts" setup>

    import {Ref,ref} from "vue"

    interface ICountry{ 
        code: string,
        name: string
    }

    const countries:Ref<Array<ICountry>> = ref([
    {    
        code : "es", //Para especificar el código de un país es necesario : , no =
        name : "España"

    },

    {
        code : "fr",
        name : "Francia"
    },

    {
        code : "it",
        name : "Italia"
    },

    {
        code : "pt",
        name : "Portugal"
    }

    
])


</script>

<style scoped>

</style>
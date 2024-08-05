<template>  
    <form>  
        <input type  = "text" placeholder = "Nombre" v-model="inputText"/>
        <input type = "checkbox" v-model = "agree"/> Acepto los términos y condiciones

        <select v-model="country">
            <option value="España">España</option>
            <option value="Uk">UK</option>
            <option value="Buenos Aires">Buenos Aires</option>
        </select>
    </form>
    <p>{{inputText}}</p>
</template>

<script lang="ts" setup>
    import { Ref , ref } from 'vue';
    let inputText:Ref<string>  = ref('');
    let agree:Ref<boolean> = ref(true);
    let country:Ref<string> = ref('');
</script>
<style scoped>
    
</style>
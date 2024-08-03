<template>
    <h2>Veces Presionado {{counter}}</h2>
    <button @click="addCounter">Incrementar</button>
</template>

<script lang="ts">
    import {defineComponent } from "vue"  
    export default defineComponent({
        name: 'CounterOption',
        data() {    
            let counter = 0;
            return {
                counter
            }
        },
        methods:{       
            addCounter(){
                this.counter++;
            }
        }
    })
</script>

<styles>

</styles>
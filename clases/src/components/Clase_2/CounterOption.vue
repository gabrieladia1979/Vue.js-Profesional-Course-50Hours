<template>
    <h2>Veces Presionado {{counter}}</h2>
    <button @click="addCounter">Incrementar</button>
</template>

<script lang="ts">
    import {defineComponent } from "vue"  
    
    interface CounterData {  //Creamos una interfaz para declarar el tipo de dato de counter
        counter:number
    }

    export default defineComponent({
    
        name: 'CounterOption',
        data():CounterData {   // Tipifica el tipo de retorno del método data 
            let counter = 0;
            return {
                counter
            }
        },
        methods:{       
            addCounter():void{ //Declaramos el tipo de retorno de la función addCounter
                this.counter++;
            }
        }
    })
</script>

<styles>

</styles>
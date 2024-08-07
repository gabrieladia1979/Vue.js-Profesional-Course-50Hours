<template>
    <section>   
        <h3>Añadir Profesor</h3>
        <div><label>Nombre:</label> <input type="text" v-model="teacher.teacherName"/></div>
        <div><label>Apellido:</label> <input type="text" v-model="teacher.teacherLastName"/></div>
        <div><label>DNI:</label> <input type="text" v-model="teacher.dni"/></div>
        <div><label>Materias:</label> <input type="text" v-model="subject"/></div> <button v-on:@click = 'handleSubject'>Añadir Materias</button>
        <input type="checkbox" v-model="teacher.documentation"/> Documentacion entregada
        <button>Añadir Profesores</button>
    </section>
        
    <section>
        <h1>Listado de Profesores</h1>
    </section>

</template>


<script lang="ts" setup>
    import { Ref , ref } from 'vue';

    interface ITeacher {
        teacherName:string,
        teacherLastName:string,
        dni:string,
        subjects:Array<string>,
        documentation:boolean
    }

    let teacher:Ref<ITeacher> = ref({
        teacherName:'',
        teacherLastName:'',
        dni:'',
        subjects:[],
        documentation:false
    })

    let teachers:Ref<Array<ITeacher>> = ref([])

    let subject:Ref<string>  = ref('')

    const handleSubject = () => {
        teacher.value.subjects.push(subject.value)
    }
    
</script>


<style scoped>

</style>
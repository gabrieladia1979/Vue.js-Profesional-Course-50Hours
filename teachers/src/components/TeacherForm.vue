<template>
    <section>
      <h3>Añadir Profesor</h3>
      <div><label>Nombre:</label> <input type="text" v-model="teacher.teacherName" /></div>
      <div><label>Apellido:</label> <input type="text" v-model="teacher.teacherLastName" /></div>
      <div><label>DNI:</label> <input type="text" v-model="teacher.dni" /></div>
      <div>
        <label>Materias:</label>
        <input type="text" v-model="subject" />
        <button v-on:click="handleSubject">Añadir Materias</button> <!-- Cambiado aquí -->
      </div>

      <div>
        <ul>
          <li v-for="(subj, index) in teacher.subjects" v-bind:key="index">{{ subj }}</li>
        </ul>
     </div>
    
     <input type="checkbox" v-model="teacher.documentation" /> Documentación entregada
     <button v-on:click = 'handleAddTeacher'>Añadir Profesores</button>

    </section>
  
    <section>
      <h1>Listado de Profesores</h1>
      <table>   
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>DNI</th>
            <th>Materias</th>
            <th>Documentación entragada</th>
        </tr>
        <tr v-for = 'elem in teachers' v-bind:key = 'elem.dni'>
            <th>{{elem.teacherName}}</th>
            <th>{{elem.teacherLastName}}</th>
            <th>{{elem.dni}}</th>
            <th>
                <ul>
                    <li v-for = '(item,index) in elem.subjects' v-bind:key = 'index'>{{item}}</li>
                </ul>
            </th>
            <th v-if = "elem.documentation">Entregada</th>
            <th v-else>No entregada</th>
        </tr>
      </table>
    </section>
  </template>
  
  <script lang="ts" setup>
  import { Ref, ref } from 'vue';
  
  interface ITeacher {
    teacherName: string;
    teacherLastName: string;
    dni: string;
    subjects: Array<string>;
    documentation: boolean;
  }
  
  let teacher: Ref<ITeacher> = ref({
    teacherName: '',
    teacherLastName: '',
    dni: '',
    subjects: [],
    documentation: false,
  });
  
  let teachers: Ref<Array<ITeacher>> = ref([]);
  
  let subject: Ref<string> = ref('');
  
  const handleSubject = () => {
    teacher.value.subjects.push(subject.value);
    subject.value = ''; //para que se vacie el campo de subject , como usamos v-model, se vacia el campo ya que es una estructura bidireccional.
  };

  const handleAddTeacher = () => {
    teachers.value.push(teacher.value)
    teacher.value = {
      teacherName: '',
      teacherLastName: '',
      dni: '',
      subjects: [],
      documentation: false,
    }
  }
  
  </script>


  <style scoped>
  </style>
  
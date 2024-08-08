<template>
    <section>
      <h3>Añadir Profesor</h3>
      <div class="input-group">
        <label>Nombre:</label>
        <input type="text" v-model="teacher.teacherName" />
      </div>
      <div class="input-group">
        <label>Apellido:</label>
        <input type="text" v-model="teacher.teacherLastName" />
      </div>
      <div class="input-group">
        <label>DNI:</label>
        <input type="text" v-model="teacher.dni" />
      </div>
      <div class="input-group">
        <label>Materias:</label>
        <input type="text" v-model="subject" />
        <button v-on:click="handleSubject">Añadir Materia</button>
      </div>
  
      <div class="subject-list">
        <ul>
          <li v-for="(subj, index) in teacher.subjects" v-bind:key="index">
            {{ subj }}
            <button class="delete-btn" v-on:click="removeSubject(index)">Eliminar</button>
          </li>
        </ul>
      </div>
  
      <div class="checkbox-group">
        <input type="checkbox" v-model="teacher.documentation" />
        <label>Documentación entregada</label>
      </div>
  
      <button v-on:click="handleAddTeacher">Añadir Profesor</button>
    </section>
  
    <section>
      <h1>Listado de Profesores</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>DNI</th>
            <th>Materias</th>
            <th>Documentación entregada</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(elem, index) in teachers" v-bind:key="elem.dni">
            <td>{{ elem.teacherName }}</td>
            <td>{{ elem.teacherLastName }}</td>
            <td>{{ elem.dni }}</td>
            <td>
              <ul>
                <li v-for="(item, subIndex) in elem.subjects" v-bind:key="subIndex">{{ item }}</li>
              </ul>
            </td>
            <td>{{ elem.documentation ? 'Entregada' : 'No entregada' }}</td>
            <td>
              <button v-on:click="editTeacher(index)">Editar</button>
              <button class="delete-btn" v-on:click="deleteTeacher(index)">Eliminar</button>
            </td>
          </tr>
        </tbody>
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
    if (subject.value.trim() !== '') {
      teacher.value.subjects.push(subject.value);
      subject.value = ''; // Limpia el campo de materia después de agregar
    }
  };
  
  const removeSubject = (index: number) => {
    teacher.value.subjects.splice(index, 1); // Elimina la materia seleccionada
  };
  
  const handleAddTeacher = () => {
    if (
      teacher.value.teacherName.trim() !== '' &&
      teacher.value.teacherLastName.trim() !== '' &&
      teacher.value.dni.trim() !== ''
    ) {
      teachers.value.push({ ...teacher.value });
      teacher.value = {
        teacherName: '',
        teacherLastName: '',
        dni: '',
        subjects: [],
        documentation: false,
      }; // Restablece el formulario después de agregar
    }
  };
  
  const editTeacher = (index: number) => {
    const teacherToEdit = teachers.value[index];
    teacher.value = { ...teacherToEdit };
    teachers.value.splice(index, 1); // Remueve el profesor de la lista temporalmente para edición
  };
  
  const deleteTeacher = (index: number) => {
    teachers.value.splice(index, 1); // Elimina el profesor de la lista
  };
  </script>
  
  <style scoped>
  section {
    background-color: #f8f8f8;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  h3,
  h1 {
    color: #333;
    margin-bottom: 10px;
  }
  
  .input-group,
  .checkbox-group {
    margin-bottom: 15px;
  }
  
  .input-group label {
    display: inline-block;
    width: 100px;
    font-weight: bold;
    color: #555;
  }
  
  .input-group input[type='text'],
  .checkbox-group input[type='checkbox'] {
    width: calc(100% - 120px);
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
    transition: border-color 0.3s;
  }
  
  .input-group input[type='text']:focus {
    border-color: #666;
    outline: none;
  }
  
  button {
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-left: 10px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .delete-btn {
    background-color: #dc3545;
  }
  
  .delete-btn:hover {
    background-color: #c82333;
  }
  
  .subject-list ul {
    list-style-type: none;
    padding: 0;
  }
  
  .subject-list li {
    background-color: #fff;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .subject-list li button {
    margin-left: 10px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th,
  td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  th {
    background-color: #f1f1f1;
    font-weight: bold;
  }
  
  td {
    background-color: #ffffff;
  }
  
  tbody tr:hover {
    background-color: #f9f9f9;
  }
  </style>
  
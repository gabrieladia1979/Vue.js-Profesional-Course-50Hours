<template>
  <div> 
    <input type = 'text' v-model="message">
    <p>{{message}}</p>
    <p>{{messageInverted}}</p>
  </div>
</template>

<script lang="ts" setup>
    import {ref , Ref ,  computed} from 'vue'
    let message = ref<string>('');
    const messageInverted = computed(() => {message.value.split('').reverse().join('')});
</script>

<style scoped>

</style> 
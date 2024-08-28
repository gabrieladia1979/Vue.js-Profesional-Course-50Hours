<template>
  <div id="app">
    <MainMenu />
    <router-view/>
  </div>
</template>

<script lang="ts" setup>
  import MainMenu from './components/MainMenu.vue';
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>

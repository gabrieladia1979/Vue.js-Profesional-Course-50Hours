<template>
  <div>
      <label for="subtTotal" v-custom-font.red >Subtotal</label>
      <input type="number" v-model="subtTotal">
      <p v-custom-font.xxl.blue>Total impuestos a pagar: {{ TotalVat }}  ({{ vat }})%</p>
  </div>
</template>

<script lang="ts" setup>
    import { ref, Ref, computed } from 'vue';

    const vat = 21; // valor constante
    let subtTotal: Ref<number> = ref(0);
    const TotalVat = computed(() => (vat * subtTotal.value) / 100);
</script>

<style scoped>
</style>

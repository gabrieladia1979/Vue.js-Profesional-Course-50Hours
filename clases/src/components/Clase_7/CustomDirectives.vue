<template>
  <div>
      <label for="subtTotal" v-custom-size = '100'>Subtotal</label>
      <input type="number" v-model="subtTotal">
      <p v-custom-size="100">Total impuestos a pagar: {{ TotalVat }}  ({{ vat }})%</p>
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

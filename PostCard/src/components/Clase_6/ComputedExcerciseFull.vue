<template>
  <div>
    <h2>Facturación de Productos</h2>

    <div v-for="(product, index) in products" :key="index" class="product">
      <label :for="'product-' + index">Producto {{ index + 1 }}</label>
      <input
        :id="'product-' + index"
        type="number"
        v-model.number="product.price"
        placeholder="Precio del producto"
      />
      <input
        type="number"
        v-model.number="product.quantity"
        placeholder="Cantidad"
      />
    </div>

    <button @click="addProduct">Agregar Producto</button>
    <button @click="removeProduct" v-if="products.length > 1">Eliminar Último Producto</button>

    <p>Subtotal: {{ subtotal }}</p>
    <p>Impuestos a pagar ({{ vat }}%): {{ totalVat }}</p>
    <p>Total Final: {{ totalFinal }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

// Constante del impuesto (21%)
const vat = 21;

// Arreglo de productos, cada producto tiene un precio y una cantidad
let products = ref([
  { price: 0, quantity: 1 }
]);

// Agrega un nuevo producto con precio y cantidad inicializados en 0 y 1
const addProduct = () => {
  products.value.push({ price: 0, quantity: 1 });
};

// Elimina el último producto del arreglo
const removeProduct = () => {
  if (products.value.length > 1) {
    products.value.pop();
  }
};

// Calcula el subtotal sumando el precio de cada producto multiplicado por su cantidad
const subtotal = computed(() =>
  products.value.reduce((sum, product) => sum + product.price * product.quantity, 0)
);

// Calcula el total de impuestos basado en el subtotal y el porcentaje de IVA
const totalVat = computed(() => (subtotal.value * vat) / 100);

// Calcula el total final sumando el subtotal y el total de impuestos
const totalFinal = computed(() => subtotal.value + totalVat.value);
</script>

<style scoped>
.product {
  margin-bottom: 10px;
}
button {
  margin-right: 5px;
}
</style>

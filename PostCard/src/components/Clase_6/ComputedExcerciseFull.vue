<template>
  <div>
    <h2>Facturación de Productos</h2>

    <!-- Productos Actuales -->
    <div v-for="(product, index) in currentProducts" :key="index" class="product">
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
    <button @click="removeProduct" v-if="currentProducts.length > 1">Eliminar Último Producto</button>
    <button @click="finalizeInvoice">Finalizar Factura</button>

    <!-- Mostrar Subtotal, Impuestos, Total -->
    <p>Subtotal: {{ subtotal }}</p>
    <p>Impuestos a pagar ({{ vat }}%): {{ totalVat }}</p>
    <p>Total Final: {{ totalFinal }}</p>

    <!-- Historial de Facturación -->
    <h3>Historial de Facturación</h3>
    <div v-for="(invoice, index) in invoiceHistory" :key="index">
      <h4>Factura {{ index + 1 }}</h4>
      <p>Subtotal: {{ invoice.subtotal }}</p>
      <p>Impuestos: {{ invoice.totalVat }}</p>
      <p>Total Final: {{ invoice.totalFinal }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

// Constante del impuesto (21%)
const vat = 21;

// Definir la interfaz de un producto
interface IProduct {
  price: number;
  quantity: number;
}

// Definir la interfaz de una factura
interface IInvoice {
  subtotal: number;
  totalVat: number;
  totalFinal: number;
}

// Lista reactiva de productos actuales
const currentProducts = ref<IProduct[]>([{ price: 0, quantity: 1 }]);

// Historial de facturación inmutable
const invoiceHistory = ref<IInvoice[]>([]);

// Agrega un nuevo producto a la lista actual
const addProduct = (): void => {
  currentProducts.value.push({ price: 0, quantity: 1 });
};

// Elimina el último producto de la lista actual
const removeProduct = (): void => {
  if (currentProducts.value.length > 1) {
    currentProducts.value.pop();
  }
};

// Computado para calcular el subtotal
const subtotal = computed<number>(() =>
  currentProducts.value.reduce((sum: number, product: IProduct) => sum + product.price * product.quantity, 0)
);

// Computado para calcular el total de impuestos
const totalVat = computed<number>(() => (subtotal.value * vat) / 100);

// Computado para calcular el total final (subtotal + impuestos)
const totalFinal = computed<number>(() => subtotal.value + totalVat.value);

// Finaliza la factura y guarda una copia inmutable en el historial
const finalizeInvoice = (): void => {
  invoiceHistory.value.push({
    subtotal: subtotal.value,
    totalVat: totalVat.value,
    totalFinal: totalFinal.value,
  });
  
  // Limpia la lista de productos actuales si lo deseas
  currentProducts.value = [{ price: 0, quantity: 1 }];
};
</script>

<style scoped>
.product {
  margin-bottom: 10px;
}
button {
  margin-right: 5px;
}
</style>

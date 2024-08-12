<template>
  <div>
    <label for="subtTotal">Subtotal</label>
    <input type = 'number' v-model = 'subtTotal'>
    <p>Total de impuestos aplicados {{TotalVat}} {{vat}}%</p>
    <botton v-on:@click = "AddProduct">Agregar Producto</botton>
  </div>
</template>

<script lang="ts" setup>
    import {ref , Ref ,  computed} from 'vue'

    let subtTotal:Ref<number> = ref(0)
    const vat = 21
    const TotalVat = computed(() => (vat*subtTotal.value)/100)

    let AddProduct = () => {
      subtTotal.value += 1
    }

    interface IProduct {
      price:number,
      quantity:number
    }

    let products:Ref<IProduct> =  ref([{
        price:0, quantity:0}]);

</script>

<style scoped>

</style>
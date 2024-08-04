<template>      
    <button class= "post-btn">ACCEDER</button>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';

    const buttonClicked = ref(false);

    const handleClick = () => {
    buttonClicked.value = !buttonClicked.value;
    console.log('Botón clicado:', buttonClicked.value);
};
</script>

<style scoped>
.post-btn {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}


.post-btn:hover {
    background-color: #45a049;
    color:white
}

/* Efecto de ondas al hacer clic */
.post-btn::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.5s, height 0.5s;
}

.post-btn:active::after {
    width: 200px;
    height: 200px;
}

</style>
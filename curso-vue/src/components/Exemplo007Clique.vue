<script setup>
    function message() {
        alert('Trabalhando com eventos de clique!')
    }
</script>

<template>
    <button @click="message">Clique aqui</button>
</template>

<style scoped>
</style>
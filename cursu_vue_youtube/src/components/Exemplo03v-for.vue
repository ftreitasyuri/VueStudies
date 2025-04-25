<script setup>

// Variáveis
let nomes = ['Alice', 'Bruna', 'Caio', 'Daniel', 'Layla'];

</script>

<template>
  <ul>
    <li v-for="nome in nomes">{{ nome }}</li>
  </ul>
</template>

<style scoped>
</style>
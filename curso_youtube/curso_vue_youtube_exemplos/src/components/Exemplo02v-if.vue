<script setup>

// Variáveis
let exibir = true;
let media = 5.6;

</script>

<template>
  <h1 v-if="exibir">
    Olá,
  </h1>
  <h2>Você está:</h2>
  <p v-if="media >= 7">Aprovado(a)</p>
  <p v-else-if="media >= 5">Em exame</p>
  <p v-else>Reprovado(a)</p>
</template>

<style scoped>
</style>
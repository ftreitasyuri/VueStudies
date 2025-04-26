<script setup>
// Importações

// O ref serve para nos auxiliar deixando as variáveis reativas
import {ref} from 'vue';

// Variáveis
let texto = ref('');

</script>

<template>
  <input v-model="texto" type="text" name="" id="">
  <p>{{ texto }}</p>
  
</template>

<style scoped>
</style>
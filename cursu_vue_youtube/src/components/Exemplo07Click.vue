<script setup>
// Importações

// O ref serve para nos auxiliar deixando as variáveis reativas
import {ref} from 'vue';

// Variáveis
let texto = ref('');

function mensagem() {
  alert('Trabalhando com eventos de clique')
}

</script>

<template>
  <button @click="mensagem">Clique aqui</button>
</template>

<style scoped>
.ok{
  color: green;
  background-color: yellow;
  font-size: 3rem;
  
  
}

.falha{color: red}

button{
  font-size: 5rem;
}
</style>
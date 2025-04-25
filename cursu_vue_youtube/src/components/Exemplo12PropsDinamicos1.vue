<script setup>
// Importações
import Exemplo from './Exemplo12PropsDinamico2.vue';

// O ref serve para nos auxiliar deixando as variáveis reativas


// Variáveis
let cidade = 'São Paulo';


// Funções
function sinal(params) {
  alert('Dimmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm');
}

</script>
 
<template>
  <!-- Passando props -->
  <Exemplo nome="Mila" idade="22" :cidade="cidade" :sinal="sinal"/>


  
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
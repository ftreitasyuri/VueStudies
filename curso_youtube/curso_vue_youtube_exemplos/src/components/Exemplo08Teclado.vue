<script setup>
// Importações

// O ref serve para nos auxiliar deixando as variáveis reativas
import {ref} from 'vue';

// Variáveis
let texto = ref('');

function mensagem() {
  alert('Executando a função')
}

</script>

<template>
  <div><input @keyup.q="mensagem" type="text" name="" id=""></div><br>
  <div><input @keydown.enter="mensagem" type="text" name="" id=""></div><br>
  <div><input @keypress.enter="mensagem" type="text" name="" id=""></div><br>
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
<script setup>
// Importações

// O ref serve para nos auxiliar deixando as variáveis reativas
import {ref} from 'vue';

// Variáveis
let texto = ref('');

let validacao = true;

</script>

<template>
<p :class="validacao ? 'ok' : 'falha'">
  Utilizando diretiva class
</p>
</template>

<style scoped>
.ok{
  color: green;
  background-color: yellow;
  font-size: 3rem;
  
  
}

.falha{color: red}
</style>
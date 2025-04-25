<script setup>
// Importações
import Exemplo from './Exemplo11PropsEstaticos2.vue';

// O ref serve para nos auxiliar deixando as variáveis reativas
import {onMounted, ref} from 'vue';

// Variáveis
let texto = ref('Hello World!');


</script>
 
<template>
  <!-- Passando props -->
  <Exemplo nome="Mila" idade="22"/>


  
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
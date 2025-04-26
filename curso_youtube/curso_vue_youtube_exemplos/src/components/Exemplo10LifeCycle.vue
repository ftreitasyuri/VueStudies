<script setup>
// Importações

// O ref serve para nos auxiliar deixando as variáveis reativas
import {onMounted, ref} from 'vue';

// Variáveis
let texto = ref('Hello World!');

// lifecycle on mounted
onMounted(() => {
  setTimeout(() => {
    texto.value = 'Alterando Texto após 3s';
  }, 3000);
});



</script>
 
<template>

  <h1>{{ texto }}</h1>
  
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
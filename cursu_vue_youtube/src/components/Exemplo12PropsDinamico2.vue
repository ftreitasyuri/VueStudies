<script setup>
// Importações

// O ref serve para nos auxiliar deixando as variáveis reativas
import {onMounted, ref} from 'vue';

// Variáveis

// Obter props
const props = defineProps(['nome', 'idade', 'cidade', 'sinal']);

</script>
 
<template>

  <!-- <h1>{{ texto }}</h1> -->
   <h1>Nome: {{ nome }}</h1>
   <h1>Idade: {{ idade }}</h1>
   <h1>Cidade: {{ cidade }}</h1>
   <button @click="sinal">Clique Aqui</button>
  
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
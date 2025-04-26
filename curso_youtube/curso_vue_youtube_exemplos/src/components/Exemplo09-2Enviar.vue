<script setup>
// Importações

// O ref serve para nos auxiliar deixando as variáveis reativas
// import {ref} from 'vue';

// Variáveis
// let texto = ref('');

function validaForm(event) {
  alert('Formulário enviado')

  // Serve para não deixar o site ser redirecionado até que seja tudo validado, ai desativamos.
  event.preventDefault();

}

</script>
 
<template>
  <form action="https://vuejs.org/guide/quick-start.html" @submit="validaForm">
    <input type="submit" value="Enviar formulário">

  </form>
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
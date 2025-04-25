<script setup>

// Variáveis
let texto = 'Aprendendo a diretica v-html'
let textoHTML = '<h1 style="color:red">Aprendendo a diretica v-html</h1>'

</script>

<template>
  <div v-html="texto"></div>
  <div v-html="textoHTML"></div>
  <!-- A interpolação de texto {{  }} não é capaz de converter código HTML igual o V-HTML-->
  <div>{{ textoHTML }}</div>
</template>

<style scoped>
</style>
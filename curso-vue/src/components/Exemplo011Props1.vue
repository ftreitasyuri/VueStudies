<script setup>
   import Exemplo011Props2 from './Exemplo011Props2.vue';

   // Variáveis
   let cidade = "Taboão da Serra";
   let cidades = ["São Paulo", "Rio de Janeiro", "Curitiba"];

   /**
    * Para enviar uma variável ou função precisavamos usar o :
    */

   // Função
   function mensagem() {
      alert("Função criada no componente: Exemplo011Props1")
   }
</script>

<template>
   <Exemplo011Props2 nome="Yuri Freitas" idade="27" :cidade :vetor="cidades" :funcao="mensagem"/>
</template>

<style scoped>
</style>
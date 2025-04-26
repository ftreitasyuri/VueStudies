<!-- Estrutura extraída do site: https://vuejs.org/guide/scaling-up/routing.html -->

<!-- SCRIPT -->
<script setup>
  // Importações do Vue
  import { ref, computed } from 'vue'

  // Páginas
  import Pagina1 from './Pagina1Rota.vue';
  import Pagina2 from './Pagina2Rota.vue';
  import Pagina3 from './Pagina3Rota.vue';
  

  // Criar uma estrutura de rotas, contendo o caminho e o camponente
  const routes = {
    '/': Pagina1,
    '/pagina2': Pagina2,
    // '/pagina3': Pagina3,
    '/404': Pagina3
  }

  // Obter o conteúdo a partir da cerquila, exemplo: http://localhost:5173/#/sobre o retorno será: #/sobre
  const referenciaRota = ref(window.location.hash)

  // Executa a ação quando realizar a navegação entre páginas. Obter o conteúdo a partir da cerquilha
  window.addEventListener('hashchange', () => {
    referenciaRota.value = window.location.hash
  });

  // Função responsável por exibir a página específica
  const currentView = computed(() => {
    return routes[referenciaRota.value.slice(1) || '/'] || PaginaErro
  })
</script>

<!-- TEMPLATE -->
<template>
  <!-- Links -->
  <a href="#/">Página 1</a>
  |
  <a href="#/pagina2">Página 2</a>
  <!-- |
  <a href="#/pagina3">Página 3</a> -->

  <!-- Exibição das páginas -->
  <component :is="currentView" />
</template>
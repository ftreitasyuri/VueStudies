<script setup>
// Importações

import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import Modal from 'bootstrap/js/dist/modal'


import { onMounted, ref } from 'vue'

// Vetor de produtos  
let produtos = ref([]);

// Visibilidade BTN
let btnCadastrar = ref(true);
let btnEditar = ref(true);
let btnExcluir = ref(true);




// OnMounted serve para existir a redenrização no vetor/api
onMounted(() => {
  fetch('http://localhost:3000/produtos')
    .then(recquiscao => recquiscao.json())
    .then(retorno => produtos.value = retorno);
});


// Objetos
let obj = ref({ 'id': 0, 'produto': "", 'valor': 0 });

// Funções

// Função cadastrar
function cadastrar(event) {
  // alert('Teste')

  // Requisição
  fetch('http://localhost:3000/produtos', {
    method: 'POST',
    body: JSON.stringify(obj.value),
    headers: { 'Content-type': 'application/json' }
  })
    .then(Requisicao => Requisicao.json())
    // .then(retorno => console.log(retorno))
    .then(retorno => {
      // Cadastrar o produto no vetor
      produtos.value.push(retorno)

      // Limpar o form
      obj.value.produto = '';
      obj.value.valor = 0
    })


  event.preventDefault();
}



function selecao(indice) {
  obj.value = {
    id: produtos.value[indice].id,
    produto: produtos.value[indice].produto,
    valor: produtos.value[indice].valor,
  }

  btnCadastrar.value = false;

  // const modal = new bootstrap.Modal(document.getElementById('modalProduto'))
  // const modal = new Modal(document.getElementById('modalProduto'))

  // modal.show()
}

// Função editar
function editar() {
  // alert('Teste')

  // Requisição
  fetch(`http://localhost:3000/produtos/${obj.value.id}`, {
    method: 'PUT',
    body: JSON.stringify(obj.value),
    headers: { 'Content-type': 'application/json' }
  })
    .then(Requisicao => Requisicao.json())
    // .then(retorno => console.log(retorno))
    .then(retorno => {

      // Obter o indice do vetor
      let indiceProduto = produtos.value.findIndex(objP => {
        return objP.id === retorno.id;
      });

      // Visibilidade botoes



      // Editar um produto
      produtos.value[indiceProduto] = produto;

      // Limpar o form
      obj.value.id = 0;
      obj.value.produto = '';
      obj.value.valor = 0;
    })

  btnCadastrar = true;

}

// Função remover

function remover() {
  // alert('Teste')

  // Requisição
  fetch(`http://localhost:3000/produtos/${obj.value.id}`, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json' }
  })
    .then(Requisicao => Requisicao.json())
    // .then(retorno => console.log(retorno))
    .then(() => {

      // Obter o indice do vetor
      let indiceProduto = produtos.value.findIndex(objP => {
        return objP.id === obj.value.id;
      });

       // Remover do vetor
      produtos.value.splice(indiceProduto,1);

      // Limpar o form
      obj.value.id = 0;
      obj.value.produto = '';
      obj.value.valor = 0;
    })

  btnCadastrar = true;

}



</script>

<template>
  <h1>Trabalhando com APIs</h1>


  <!-- Formulário -->
  <form action="">
    <input type="hidden" name="" id="" v-model="obj.id">
    <!-- debug -->
    <!-- <p>{{ obj }}</p> -->

    <input class="form-control" type="text" v-model="obj.produto" placeholder="Produto">
    <input class="form-control" type="number" v-model="obj.valor" placeholder="Valor">

    <input v-if="btnCadastrar" @click="cadastrar" class="btn btn-primary" type="submit" value="Cadastrar">

    <input v-if="!btnCadastrar" @click="editar" class="btn btn-secondary espacoBTN" type="submit" value="Editar">

    <input v-if="!btnCadastrar" @click="remover" class="btn btn-danger" type="submit" value="Excluir">
  </form>

  <!-- Tabela -->
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Produto</th>
        <th>Valor</th>
        <th>
          Selecionar
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(p, indice) in produtos">
        <td>{{ p.produto }}</td>
        <td>{{ p.valor }}</td>

        <td>
          <button @click="selecao(indice)" class="btn btn-primary">Ver mais</button>
        </td>
      </tr>
    </tbody>
  </table>



  <!-- Modal -->
  <div class="modal fade" id="modalProduto" tabindex="-1" aria-labelledby="modalProdutoLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content text-start">
        <div class="modal-header">
          <h5 class="modal-title" id="modalProdutoLabel">Detalhes do Produto</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
        </div>
        <div class="modal-body">
          <p><strong>ID:</strong> {{ obj.id }}</p>
          <p><strong>Produto:</strong> {{ obj.produto }}</p>
          <p><strong>Valor:</strong> R$ {{ obj.valor }}</p>
        </div>
        <div class="modal-footer">
          <input v-if="!btnCadastrar" class="btn btn-secondary espacoBTN" type="submit" value="Editar">
          <input v-if="!btnCadastrar" class="btn btn-danger" type="submit" value="Excluir">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>
form {
  width: 50%;
  margin: 0 auto;
  text-align: center;


}

input {
  margin: 5px auto;


}

.espacoBTN {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
<script setup>

// Importando bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Para trabalhar com a ingestão de dados, precisamos de um vetor
import { ref, onMounted } from 'vue'


// Vetor de produtos
let produtos = ref([]);

// Visibilidade dos botões
let btnCadastrar = ref([]);

// LifyCicle onMounted
onMounted(() => {
    fetch('http://localhost:3000/produtos')
        .then(requisicao => requisicao.json())
        .then(retorno => produtos.value = retorno)
});


// Objeto do tipo produto
let obj = ref({ 'id': 0, 'produto': '', 'valor': 0 })




// Função para cadastrar produtos

function cadastrar(event) {
    // alert('Teste')


    // Requisição de POST
    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        body: JSON.stringify(obj.value),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(requisicao => requisicao.json())
        // Exemplo de debug abaixo
        // .then(retorno => console.log(retorno))
        .then(retorno => {
            // Cadastrar o produto no vetor
            produtos.value.push(retorno)
            // Limpar os inputs

            obj.value.produto = '',
                obj.value.valor = 0
        })

    // Prevent Default
    event.preventDefault();
}

// Função para selecionar um produto especifico
function selecionar(indice) {
    // alert('Hello Selecionado')
    obj.value = {
        id: produtos.value[indice].id,
        produto: produtos.value[indice].produto,
        valor: produtos.value[indice].valor
    }

    btnCadastrar.value = false;
}

// Função para editar produtos
function editar() {
    // alert('Teste')


    // Requisição de POST
    fetch('http://localhost:3000/produtos/' + obj.value.id, {
        // fetch(`http://localhost:3000/produtos/${obj.value.id}`, {
        method: 'PUT',
        body: JSON.stringify(obj.value),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(requisicao => requisicao.json())
        // Exemplo de debug abaixo
        // .then(retorno => console.log(retorno))
        .then(retorno => {

            // Obter o indice do vetor
            let indiceProduto = produtos.value.findIndex(objP => {
                return objP.id === retorno.id;
            });

            // alert(indiceProduto);

            // Alterar a visibilidade dos botões 
            btnCadastrar.value = true;

            // Cadastrar o produto no vetor
            produtos.value[indiceProduto] = retorno;
            // Limpar os inputs
            obj.value.id = 0;
            obj.value.produto = '',
                obj.value.valor = 0
        })


}
// Função para remover produtos
function remover() {
    // alert('Teste')


    // Requisição de POST
    fetch('http://localhost:3000/produtos/' + obj.value.id, {
        // fetch(`http://localhost:3000/produtos/${obj.value.id}`, {
        method: 'DELETE',
        // delete não tem BODY
        // body: JSON.stringify(obj.value),
        // headers: { 'Content-Type': 'application/json' }
    })
        .then(requisicao => requisicao.json())
        // Exemplo de debug abaixo
        // .then(retorno => console.log(retorno))
        .then(retorno => {

            // Obter o indice do vetor
            let indiceProduto = produtos.value.findIndex(objP => {
                return objP.id === obj.value.id;
            });

            // alert(indiceProduto);



            // Remover o produto no vetor
            produtos.value.splice(indiceProduto, 1);

            // Alterar a visibilidade dos botões 
            btnCadastrar.value = true;
            // Limpar os inputs
            obj.value.id = 0;
            obj.value.produto = '',
                obj.value.valor = 0
        })


}


</script>

<template>
    <h1>Trabalhando com API </h1>

    <!-- Formulário -->

    <form action="">

        <!-- Para debug, comando abaixo para ver o v-model funcionanod -->
        <!-- <p>{{ obj }}</p> -->

        <input type="hidden" v-model="obj.id">
        <input type="text" placeholder="Produto" class="form-control" v-model="obj.produto" id="produto" name="produto">
        <input type="text" placeholder="Valor" class="form-control" v-model="obj.valor" id="valor" name="valor">
        <input type="submit" v-if="btnCadastrar" @click="cadastrar" value="Cadastrar" class="btn btn-primary" id="botao"
            name="botao">

        <input type="button" @click="editar" v-if="!btnCadastrar" value="Editar" class="btn btn-primary mx-2">

        <input type="button" @click="remover()" v-if="!btnCadastrar" value="Excluir" class="btn btn-danger mx-2">

    </form>

    <!-- Tabela -->
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Produto</th>
                <th>Valor</th>
                <th>Selecionar</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(v, indice) in produtos">
                <td>{{ v.produto }}</td>
                <td>{{ v.valor }}</td>
                <td><button @click="selecionar(indice)" class="btn btn-primary">Ver mais</button></td>
            </tr>
        </tbody>
    </table>

</template>

<style scoped>
form {
    width: 50%;
    margin: 30px auto;
    text-align: center;
}

input {
    margin-bottom: 10px;
}
</style>
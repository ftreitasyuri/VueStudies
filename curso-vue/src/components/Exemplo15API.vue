<script setup>

// Importando bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Para trabalhar com a ingestão de dados, precisamos de um vetor
import { ref, onMounted } from 'vue'

let produtos = ref([]);


// LifyCicle onMounted
onMounted(() => {
    fetch('http://localhost:3000/produtos')
        .then(requisicao => requisicao.json())
        .then(retorno => produtos.value = retorno)
});


// Objeto do tipo produto
let obj = ref({ 'id': 0, 'produto': '', 'valor': 0 })

// Função para cadastrar produtos

function cadastrar(event){
    // alert('Teste')


    // Requisição de POST
    fetch('http://localhost:3000/produtos',{
        method:'POST',
        body:JSON.stringify(obj.value),
        headers:{'Content-Type': 'application/json'}
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


</script>

<template>
    <h1>Trabalhando com API </h1>

    <!-- Formulário -->

    <form action="">
        
        <!-- Para debug, comando abaixo para ver o v-model funcionanod -->
        <!-- <p>{{ obj }}</p> -->

        <input type="text" placeholder="Produto" class="form-control" v-model="obj.produto" id="produto" name="produto">
        <input type="text" placeholder="Valor" class="form-control" v-model="obj.valor" id="valor" name="valor">
        <input type="submit" @click="cadastrar" value="Cadastrar" class="btn btn-primary" id="botao" name="botao">

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
            <tr v-for="v in produtos">
                <td>{{ v.produto }}</td>
                <td>{{ v.valor }}</td>
                <td><button class="btn btn-primary">Ver mais</button></td>
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
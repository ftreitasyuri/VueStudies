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


</script>

<template>
    <h1>Trabalhando com API </h1>

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

<style scoped></style>
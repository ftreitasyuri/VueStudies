<script setup>

import { ref } from "vue";

let nome = ref('Aline')


// Funções

function altNome(params) {
    nome.value = 'Mauro';
}

function media(n1, n2){
    return (n1 + n2)/2;
}
function situacao(media){
    let situacaoAluno = '';

    if(media >= 7){
        situacaoAluno = 'Aprovado(a)'
    }else if(media >= 5){
        situacaoAluno = 'Em exame'
    }else{
        situacaoAluno = 'Reprovado(a)'
    }

    return situacaoAluno;
}


</script>

<template>

</template>
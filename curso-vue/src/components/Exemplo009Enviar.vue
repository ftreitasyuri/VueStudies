<script setup>
    function validaForm(event) {
        alert('Formulário enviado')

        // O preventDefault serve para o form não ser enviado até todos os campos estarem preenchidos.
        event.preventDefault();
    }
</script>

<template>
    <form @submit="validaForm" action="">
        <input type="submit" value="Enviar Formulário">
    </form>
</template>

<style scoped>
</style>
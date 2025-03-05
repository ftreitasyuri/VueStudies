<script setup>
// Importando bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



</script>

<template>
    <h1 class="m-5">BootStrap 1</h1>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Client Information</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h2>Dados do Cliente</h2>
                    <table>
                        <th>
                            <td>ID: </td>
                            <td>Nome:</td>
                            <td>Tel:</td>
                            <td>End:</td>
                        </th>
                        <tr>
                            <td>001</td>
                            <td> Cliente: Leal Limpezas L.T.D.A</td>
                            <td> 11 96586-5231</td>
                            <td>Rua Benedito Cesário 23</td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped></style>
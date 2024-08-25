<template>

    <div class="container-fluid mt-2 mb-4">

        <div class="card shadow-lg">
            <div class="card-header">
                <h4> Empresas de coleta</h4>>
                <RouterLink class="btn btn-dark float-end" to="/companies/new"> <i class="bi bi-plus"></i>&nbsp;Nova
                    empresa</RouterLink>
            </div>


            <div class="card-body">

                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>



        </div>

    </div>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import CompaniesApi from '@/services/api/CompaniesApi';
import { toast } from 'vue3-toastify';
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
    name: 'CompaniesView',

    setup(){
        const companies = ref([]);

        const fetchCompanies = async () => {
            try {
                const api = new CompaniesApi();
                const data = await api.list();
                companies.value = data;

                console.log(companies.data);

            } catch (error){

                if(error.response && error.response.status !== 401){
                    toast.error(`erro ao recuperar os registros: ${error}`,{
                        'theme': 'colored',
                        hideProgressBar: true,

                    });
                };

            }
        }

        onMounted(fetchCompanies);

        return{companies}


    }
});

</script>

<style scoped></style>
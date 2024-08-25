import BaseApi from "./BaseApi";


class CompaniesApi extends BaseApi{

    list(){
        return this.get('/companies');
    }

    create(company){
        return this.post('/companies', company);
    }

    update(id, company){
        return this.put(`/companies/${id}`, company);
    }

    destroy(id){
        return this.put(`/companies/${id}`);
    }

}


export default CompaniesApi;
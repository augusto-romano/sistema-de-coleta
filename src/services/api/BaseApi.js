import axios from "axios";
import { BASE_URL } from "./config";
import { useRouter } from "vue-router";

class BaseApi{

    //construtor
    constructor(){
        this.axiosInstance = axios.create({
            baseURL: BASE_URL,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
    } // fim do construtor


    //metodo para realizar requisiçoes GET
    async get(url){
        const response = await this.axiosInstance.get(url);
        return response.data;
    }

    //metodo para realizar requisiçoes POST
    async post(url, data ){
        const response = await this.axiosInstance.post(url, data);
        return response.data;
    }


     //metodo para realizar requisiçoes PUT
    async put(url, data ){
        const response = await this.axiosInstance.put(url, data);
        return response.data;
    }


     //metodo para realizar requisiçoes DELETE
        async delete(url, data ){
        const response = await this.axiosInstance.delete(url, data);
        return response.data;
    }



    

}

export default BaseApi;
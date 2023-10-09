import axios, { Axios, AxiosError } from "axios";
import { apiRoute, connectionError } from "../routes/stores";

class ApiClient {
    instance: Axios;
    constructor() {
      this.instance = axios.create({
        baseURL: apiRoute,
        timeout: 10000,
      });
    }

    private errorHandler(error: any) {      
      if(error.code == 'ERR_NETWORK'){
        connectionError.set(500);
      }
      else if(error.response.status == 403){
        connectionError.set(403);
      }
    }
  
    async get(endpoint: string, params?: any) {
      try {
        const response = await this.instance.get(endpoint, { params });
        return response.data;
      } catch (error: any) {
        this.errorHandler(error);
        throw error;
      }
    }
  
    async post(endpoint: string, data: any) {
      try {
        const response = await this.instance.post(endpoint, data);
        return response.data;
      } catch (error: any) {
        this.errorHandler(error);
        throw error;
      }
    }

    async put(endpoint: string, data: any) {
      try {
        const response = await this.instance.put(endpoint, data);
        return response.data;
      } catch (error: any) {        
        this.errorHandler(error);
        throw error;
      }
    }

    async delete(endpoint: string) {
      try {
        const response = await this.instance.delete(endpoint);
        return response.data;
      } catch (error: any) {
          this.errorHandler(error);
          throw error;
        }
  }
}

const Api = new ApiClient();
export default Api;

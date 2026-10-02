import { api } from "../api";

export class AuthService {

  baseUrl = import.meta.env.VITE_API_URL;

  async login(email: string, password: string) {
    try {

      const response = await api.post(this.baseUrl + 'login', {
          email: email,
          password: password
      });
      
      console.log(response);

      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }

}
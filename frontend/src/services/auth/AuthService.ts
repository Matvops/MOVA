import { api } from "../api";

export class AuthService {

  baseUrl = import.meta.env.VITE_API_URL;

  async login() {
    try {
      const response = await api.post(this.baseUrl + 'login');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

}
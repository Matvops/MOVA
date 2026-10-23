import { api } from '../api.ts';

export class ProfileService {

    baseUrl: string = import.meta.env.BASE_URL;

    async getAll() {
        try {

            const response = await api.get(this.baseUrl + 'profile/all',
                {
                    headers: {
                        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
                    }
                }
            ).then((response) => response.data);

            return response;
        } catch (error: any) {
            return error.response.data;
        }
    }
}
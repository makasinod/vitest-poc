import axios from 'axios';
import { env } from './env';


export class HttpClient {
    private baseUrl: string;
    private token: string;
    private username: string;

    constructor() {
        this.baseUrl = env.baseUrl;
        this.token = env.token;
        this.username = env.username;
    }

    public async get(endpoint: string, params = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        const response = await axios.get(url, {
            params,
            auth: {
                username: this.username,
                password: this.token
            }
        });
        return response.data;
    }

    public async post(endpoint: string, data: any) {
        const url = `${this.baseUrl}${endpoint}`;
        const response = await axios.post(url, data, {
            auth: {
                username: this.username,
                password: this.token
            }
        });
        return response.data;
    }
}    
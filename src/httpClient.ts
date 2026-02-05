import axios from "axios";
import { env } from "./env";

export class HttpClient {
	private baseUrl: string;
	private token: string;
	private username: string;

	constructor() {
		this.baseUrl = env.baseUrl;
		this.token = env.token;
		this.username = env.username;
	}

	public async get<TResponse>(endpoint: string, params = {}) {
		const url = `${this.baseUrl}${endpoint}`;
		try {
			const response = await axios.get<TResponse>(url, {
				params,
				auth: {
					username: this.username,
					password: this.token,
				},
			});
			return response.data;
		} catch (error) {
			console.error("Error during GET request:", error);
			throw error;
		}
	}

	public async post<TResponse, TRequest>(endpoint: string, data: TRequest) {
		const url = `${this.baseUrl}${endpoint}`;
		try {
			const response = await axios.post<TResponse>(url, data, {
				auth: {
					username: this.username,
					password: this.token,
				},
			});
			return response.data;
		} catch (error) {
			console.error("Error during POST request:", error);
			throw error;
		}
	}
}

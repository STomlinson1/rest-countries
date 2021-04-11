import axios from 'axios';

import { ApiData } from '../types';
class CountryService {
	baseURL = 'https://restcountries.eu/rest/v2';

	public getAll = async () => {
		const response = await axios.get(`${this.baseURL}/all`);
		return response.data as ApiData[];
	};
}

export default new CountryService();

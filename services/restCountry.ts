import axios from 'axios';

class CountryService {
	baseURL = 'https://restcountries.eu/rest/v2';

	public getAll = async () => {
		const response = await axios.get(`${this.baseURL}/all`);
		return response.data;
	};
}

export default new CountryService();

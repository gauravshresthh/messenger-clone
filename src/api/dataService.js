import api from './api';

class DataService {
	async getDataList(url) {
		try {
			let res = await api.get(url);
			return res.body;
		} catch (error) {
			throw error;
		}
	}
	async getAuthenticatedDataList(url, token) {
		try {
			let res = await api.getAuthenticatedData(url, token);
			return res.body;
		} catch (error) {
			throw error;
		}
	}

	async getJSONDataList(url) {
		try {
			let res = await api.getJSON(url);
			return res.body;
		} catch (error) {
			throw error;
		}
	}
}

export default new DataService();

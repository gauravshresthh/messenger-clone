import api from './api';

class FormService {
	async submit(url, params) {
		try {
			const res = await api.post(url, params);
			return res;
		} catch (error) {
			throw error;
		}
	}
	async submitMultiPartFormData(url, feildName, params) {
		try {
			const res = await api.postFormData(url, feildName, params);
			return res;
		} catch (error) {
			throw error;
		}
	}
	async postAuthenticatedData(url, token, params) {
		try {
			let res = await api.postAuthenticatedData(url, token, params);
			return res;
		} catch (error) {
			throw error;
		}
	}
	async updateAuthenticatedData(url, token, params) {
		try {
			let res = await api.updateAuthenticatedData(url, token, params);
			return res;
		} catch (error) {
			throw error;
		}
	}
	async postAuthenticatedMultipartFormData(url, token, feildName, params) {
		try {
			let res = await api.postAuthenticatedFormData(
				url,
				token,
				feildName,
				params
			);
			return res;
		} catch (error) {
			throw error;
		}
	}
	async updateAuthenticatedMultipartFormData(url, token, feildName, params) {
		try {
			let res = await api.putAuthenticatedFormData(
				url,
				token,
				feildName,
				params
			);
			return res;
		} catch (error) {
			throw error;
		}
	}
	async deleteAuthenticatedData(url, token) {
		try {
			let res = await api.deleteAuthenticatedData(url, token);
			return res;
		} catch (error) {
			throw error;
		}
	}
}

export default new FormService();

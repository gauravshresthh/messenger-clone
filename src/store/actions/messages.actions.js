import {
	MESSAGE_LIST_REQUEST,
	MESSAGE_LIST_SUCCESS,
	MESSAGE_LIST_FAIL,
} from '../constants/messages.constants';
import api from '../../api';

export const listMessages = page => async dispatch => {
	try {
		dispatch({ type: MESSAGE_LIST_REQUEST });
		const { data } = await api.get(`users?page=${page}`);
		dispatch({ type: MESSAGE_LIST_SUCCESS, payload: data });
		return;
	} catch (error) {
		dispatch({
			type: MESSAGE_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

import {
	MESSAGE_LIST_REQUEST,
	MESSAGE_LIST_SUCCESS,
	MESSAGE_LIST_FAIL,
} from '../constants/messages.constants';
import api from '../../api';

export const listMessages = page => async (dispatch, getState) => {
	try {
		let currentData = getState().messages?.messageList;

		dispatch({ type: MESSAGE_LIST_REQUEST });
		const { data } = await api.get(`users?page=${page}`);
		console.log('currentArray', currentData);
		currentData = currentData.concat(data.data);
		console.log('new Array', currentData);
		dispatch({ type: MESSAGE_LIST_SUCCESS, payload: currentData });
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

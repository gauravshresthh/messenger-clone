import {
	MESSAGE_LIST_REQUEST,
	MESSAGE_LIST_SUCCESS,
	MESSAGE_LIST_FAIL,
} from '../constants/messages.constants';

const initialState = {
	messageList: [],
	messageListLoading: false,
	messageListError: null,
	messageListSuccess: false,
	messageListStored: [],
};

export const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case MESSAGE_LIST_REQUEST:
			return {
				...state,
				messageListLoading: true,
				messageListSuccess: false,
				messageListError: null,
			};
		case MESSAGE_LIST_SUCCESS:
			return {
				...state,
				messageListLoading: false,
				messageList: action.payload,
				messageListSuccess: true,
				messageListError: null,
			};
		case MESSAGE_LIST_FAIL:
			return {
				...state,
				messageListLoading: false,
				messageList: [],
				messageListSuccess: false,
				messageListError: action.payload,
			};

		default:
			return state;
	}
};

export default messageReducer;

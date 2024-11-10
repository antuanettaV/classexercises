export const SET_ACTIVE_CONTACT = 'SET_ACTIVE_CONTACT';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

const initialState = {
  activeContact: null, 
  messages: [], 
};

export const messengerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CONTACT:
      return {
        ...state,
        activeContact: action.payload, 
      };

    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload], 
      };

    case REMOVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((message) => message.id !== action.payload), 
      };

    default:
      return state;
  }
};

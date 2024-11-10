const initialState = {
    friends: [],
  };
  
    const ADD_FRIEND = "ADD_FRIEND";
  const REMOVE_FRIEND = "REMOVE_FRIEND";
  const TOGGLE_FRIEND_STATUS = "TOGGLE_FRIEND_STATUS";
  
  export const friendsReducer = (state, action) => {
    switch (action.type) {
      case ADD_FRIEND:
        return {
          ...state,
          friends: [...state.friends, action.payload],
        };
  
      case REMOVE_FRIEND:
        return {
          ...state,
          friends: state.friends.filter((friend) => friend.id !== action.payload),
        };
  
      case TOGGLE_FRIEND_STATUS:
        return {
          ...state,
          friends: state.friends.map((friend) =>
            friend.id === action.payload
              ? { ...friend, isOnline: !friend.isOnline }
              : friend
          ),
        };
  
      default:
        return state;
    }
  };
  
    export const addFriend = (friend) => ({
    type: ADD_FRIEND,
    payload: friend,
  });
  
  export const removeFriend = (id) => ({
    type: REMOVE_FRIEND,
    payload: id,
  });
  
  export const toggleFriendStatus = (id) => ({
    type: TOGGLE_FRIEND_STATUS,
    payload: id,
  });
  
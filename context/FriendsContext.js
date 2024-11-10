import React, { createContext, useReducer } from "react";
import { friendsReducer, addFriend, removeFriend, toggleFriendStatus } from "../reducer/friendsReducer";

const FriendsContext = createContext();

export const FriendsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(friendsReducer, {
    friends: [],
  });

  return (
    <FriendsContext.Provider value={{ state, dispatch }}>
      {children}
    </FriendsContext.Provider>
  );
};

export const useFriends = () => {
  return React.useContext(FriendsContext);
};

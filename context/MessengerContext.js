import React, { createContext, useContext, useReducer } from "react";
import { messengerReducer, initialState } from "../reducer/messengerReducer";

const MessengerContext = createContext();

export const useMessenger = () => {
  return useContext(MessengerContext);
};

export const MessengerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messengerReducer, initialState);

  return (
    <MessengerContext.Provider value={{ state, dispatch }}>
      {children}
    </MessengerContext.Provider>
  );
};

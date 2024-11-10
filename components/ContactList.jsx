import React from "react";
import { useMessenger } from "../context/MessengerContext";  

const ContactList = () => {
  const { dispatch } = useMessenger();

  const handleContactClick = (recipient) => {
    dispatch({ type: "SET_RECIPIENT", payload: recipient });
  };

  return (
    <div>
      <button onClick={() => handleContactClick({ id: 1, name: "John" })}>
        Select John
      </button>
    </div>
  );
};

export default ContactList;

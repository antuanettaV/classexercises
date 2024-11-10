import React, { useState } from "react";
import { useMessenger } from "../context/MessengerContext"; 
import { ADD_MESSAGE } from "../reducer/messengerReducer"; 

const Chat = () => {
  const { state, dispatch } = useMessenger(); 
  const [message, setMessage] = useState(""); 

 
  const handleSendMessage = () => {
    if (message) {
      const newMessage = {
        id: Date.now(), 
        text: message,  
        sender: "me", 
      };
      dispatch({ type: ADD_MESSAGE, payload: newMessage }); 
      setMessage(""); 
    }
  };

  return (
    <div>
      <h3>Chat with {state.activeContact?.name}</h3>
      <div>
        
        {state.messages.map((msg) => (
          <p key={msg.id}>{msg.text}</p> 
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button> 
    </div>
  );
};

export default Chat;
1
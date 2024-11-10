import React from 'react';
import { MessengerProvider } from './context/MessengerContext'; 
import ContactList from './components/ContactList'; 
import Chat from './components/Chat'; 

const App = () => {
  return (
    <MessengerProvider>
      <div>
        <ContactList /> 
        <Chat /> 
      </div>
    </MessengerProvider>
  );
};

export default App;


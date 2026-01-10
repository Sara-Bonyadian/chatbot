import { useEffect, useState} from 'react';
import {ChatInput} from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages';
import {Chatbot} from 'supersimpledev'
import './App.css'


function App() { 
  const commentsIntialValue = JSON.parse(localStorage.getItem("messages"))!= null ? [...JSON.parse(localStorage.getItem("messages"))] :[]
         const [chatMessages, setChatMessages] = useState(commentsIntialValue);
         useEffect(()=>{localStorage.setItem('messages',JSON.stringify(chatMessages))},[chatMessages])
         useEffect(()=>{
            Chatbot.addResponses({
              "good morning":"have good time",
              "give me a unique ID":()=>{
                return `Sure! Here's a unique ID${crypto.randomUUID()}`
                }
            }) 
          })
        // const [chatMessages, setChatMessages] = array;
        // const chatMessages = array[0];
        // const setChatMessages = array[1];
            console.log("test", );
            
        return (
          <div className="app-container">
            {(chatMessages.length===0)&&(
              <p className="welcome-message">
                Welcome to the chatbot project! Send a message using the textbox below.
              </p>
            )}
            <ChatMessages
              chatMessages={chatMessages}
            />
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages} 
            />
    
          </div>
        );
      }

export default App

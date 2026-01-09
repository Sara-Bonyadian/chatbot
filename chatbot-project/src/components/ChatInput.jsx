import { useState } from 'react';
import {Chatbot} from 'supersimpledev';
import LoadingProfileImages from '../assets/loading-spinner.gif'
export function ChatInput({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] = useState("");
        // const [isLoading, setIsLoading] = React.useState(false);

        function saveInputText(event) {
          setInputText(event.target.value);
        }

        async function sendMessage() {
          // Clear the textbox at the top now because the Chatbot
          // will take some time to load the response. We want
          // to clear the textbox immediately rather waiting
          // for the Chatbot to finish loading.
          setInputText('');

          const newChatMessages = [
            ...chatMessages,{
              message: inputText,
              sender: "user",
              id: crypto.randomUUID(),
            },
          ];
          console.log("1", inputText);
          
          setChatMessages([
            ...newChatMessages,{ 
              message: <img src={LoadingProfileImages} className="loading-spinner" />, 
              sender: "robot", 
              id: crypto.randomUUID() 
            },
          ]);

          const response = await Chatbot.getResponseAsync(inputText);
          console.log("2", response);

          setChatMessages([
            ...newChatMessages,{ 
              message: response, 
              sender: "robot", 
              id: crypto.randomUUID() 
            },
          ]);

        }

        function handleKeyDown(event) {
          if (event.key === "Enter") sendMessage();
          else if (event.key === "Escape") setInputText("");
        } 

        return (
          <div className="chat-input-container">
            <input
              type="text"
              placeholder="Type your message..."
              size="50"
              onChange={saveInputText}
              onKeyDown={handleKeyDown}
              value={inputText}
              className="chat-input"
            />
            <button 
              onClick={sendMessage}
              className="send-button"
            >
              Send
            </button>
          </div>
        );
      }
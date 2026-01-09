 import { useRef, useEffect } from 'react';
 import { ChatMessage} from './ChatMessage';
 export function ChatMessages({chatMessages}){
        const chatMessagesRef=useAutoScroll([chatMessages]);
        return(
          <div 
            className="chat-message-container"
            ref={chatMessagesRef}>
            {chatMessages.map((chatMessage)=>(
              <ChatMessage 
                key={chatMessage.id}
                message={chatMessage.message}
                sender={chatMessage.sender}
            />
          ))}
          </div>
          );
      }
    function useAutoScroll(dependencies){
        const containerRef=useRef(null);
        useEffect(()=>{
          const continerElem=containerRef.current;
          if(continerElem){
            continerElem.scrollTop=continerElem.scrollHeight;
          }
        }, [dependencies]);

        return containerRef;
      }


     
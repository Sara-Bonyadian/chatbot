import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css'

 export function ChatMessage(props){
        const {message,sender,time,isMessageLoading} = props;
        console.log("4",time);
        console.log("5",props);
        
        return(
          <div 
            className={sender==="user" ? "chat-message-user":"chat-message-robot"}>
              {sender==="robot" && (
                <img src={RobotProfileImage} 
                  className="chat-message-profile"/>) 
              }
            <div 
              className="chat-message-text">
                {message}
                <p>{isMessageLoading ? '' : time}</p>
            </div>
              {sender==="user" && (
                <img src={UserProfileImage} 
                  className="chat-message-profile"/> )
              }
          </div>
        );
       
      }

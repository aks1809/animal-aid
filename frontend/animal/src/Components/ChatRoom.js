import React, { useEffect, useRef } from "react";
import ClientChat from "./ClientChat";
import ServerChat from "./ServerChat";

const ChatRoom = ({ messageList }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messageList]);

  return (
    <div className="chat-room bg-secondary">
      {messageList.map((message) => {
        return (
          <div key={message._id}>
            {message.isAdmin ? (
              <ServerChat message={message.message} />
            ) : (
              <ClientChat message={message.message} />
            )}
          </div>
        );
      })}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatRoom;

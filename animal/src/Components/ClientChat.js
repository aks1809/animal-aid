import React from "react";

const ClientChat = ({ message, imageUrl }) => {
  return (
    <div className="message message-right">
      <div className="avatar-wrapper avatar-small">
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://img.freepik.com/free-vector/cute-corgi-puppy-cartoon-icon-illustration-animal-dog-icon-concept-isolated-flat-cartoon-style_138676-1377.jpg?size=338&ext=jpg"
          }
          alt="avatar"
        />
      </div>
      <div className="bubble bubble-dark bg-primary text-white">{message}</div>
    </div>
  );
};

export default ClientChat;

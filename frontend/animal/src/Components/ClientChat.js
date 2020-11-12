import React from "react";

const ClientChat = ({ message }) => {
  return (
    <div className="message message-right">
      <div className="avatar-wrapper avatar-small">
        <img
          src="https://i.pinimg.com/236x/b7/2f/bb/b72fbb727aab44381ae0a23f05bc3781.jpg"
          alt="avatar"
        />
      </div>
      <div className="bubble bubble-dark bg-primary text-white">{message}</div>
    </div>
  );
};

export default ClientChat;

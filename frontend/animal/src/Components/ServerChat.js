import React from "react";

const ServerChat = () => {
  return (
    <div className="message message-left">
      <div className="avatar-wrapper avatar-small">
        <img
          src="https://i.pinimg.com/236x/b7/2f/bb/b72fbb727aab44381ae0a23f05bc3781.jpg"
          alt="avatar"
        />
      </div>
      <div className="bubble bubble-light bg-info text-white">
        Welcome! How can we help you?
      </div>
    </div>
  );
};

export default ServerChat;
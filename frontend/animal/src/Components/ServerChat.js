import React from "react";
import image from "../images/logoHeader.png";

const ServerChat = ({ message }) => {
  return (
    <div className="message message-left">
      <div className="avatar-wrapper avatar-small">
        <img src={image} alt="" />
      </div>
      <div className="bubble bubble-light bg-info text-white">{message}</div>
    </div>
  );
};

export default ServerChat;

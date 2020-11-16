import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import React, { useState } from "react";
import ClientChat from "./ClientChat";
import ServerChat from "./ServerChat";
import axios from "../apis/axios";
import "../Style/TalkToUs.css";

const TalkToUs = ({ messageList }) => {
  const [display, setDisplay] = useState(0);
  const [query, setQuery] = useState("");

  const sendQuery = async (e) => {
    e.preventDefault();
    await axios.post("/talkToUs/new", {
      message: query,
      userId: "Demo userId",
      isAdmin: false,
    });
    setQuery("");
  };

  if (display === 0) {
    return (
      <div className="talkToUs">
        <Avatar className="floating-icon">
          <IconButton
            className="plus-sign"
            onClick={() => {
              setDisplay(1);
            }}
          >
            <AddIcon />
          </IconButton>
        </Avatar>
      </div>
    );
  } else {
    return (
      <div className="chat-box">
        <div className="header bg-dark">
          <div className="avatar-wrapper avatar-big">
            <img
              src="https://i.pinimg.com/236x/b7/2f/bb/b72fbb727aab44381ae0a23f05bc3781.jpg"
              alt="avatar"
            />
          </div>
          <span className="name text-white">Animal Aid HelpLine</span>
          <span className="options">
            <IconButton
              onClick={() => {
                setDisplay(0);
              }}
              className="close-window-wrapper"
            >
              <ArrowDropDownIcon className="close-window" />
            </IconButton>
          </span>
        </div>
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
        </div>
        <div className="type-area">
          <form>
            <div className="input-wrapper">
              <input
                type="text"
                id="inputText"
                className="text-white bg-dark type-in"
                placeholder="Type messages here..."
                value={query}
                autoComplete="off"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="button-send bg-dark text-primary"
              onClick={sendQuery}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
};
export default TalkToUs;

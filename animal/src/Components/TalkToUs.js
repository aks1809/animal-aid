import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import image from "../images/logoHeader.png";
import ChatRoom from "./ChatRoom";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import "../Style/TalkToUs.css";

const TalkToUs = ({ messageList, admins }) => {
  const [{ user }] = useStateValue();
  const [display, setDisplay] = useState(0);
  const [query, setQuery] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const getUId = () => {
    if (!user) return null;
    else return user.googleId;
  };

  const sendQuery = async (e) => {
    e.preventDefault();
    if (query !== "") {
      await axios.post("/api/talkToUs/new", {
        message: query,
        userId: `${getUId()}`,
        isAdmin: isAdmin,
        pictureUrl: user ? user.imageUrl : null,
      });
      setQuery("");
    }
  };

  useEffect(() => {
    if (admins && user)
      admins.forEach((admin) => {
        if (admin.adminId === user.googleId) {
          setIsAdmin(true);
        }
      });
  }, [isAdmin, admins, user]);

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
        <div className="header bg-dark" id="chat-header">
          <div className="avatar-wrapper avatar-big bg-white">
            <img src={image} alt="avatar" />
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
        <ChatRoom messageList={messageList} />
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

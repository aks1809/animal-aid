import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import React from "react";
import "../Style/TalkToUs.css";
import ClientChat from "./ClientChat";
import ServerChat from "./ServerChat";

class TalkToUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: 0, query: "" };
  }
  sendQuery = () => {
    alert(this.state.query);
  };
  render() {
    if (this.state.display === 0) {
      return (
        <div className="talkToUs">
          <Avatar className="floating-icon">
            <IconButton
              className="plus-sign"
              onClick={() => {
                this.setState({ display: 1 });
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
                  this.setState({ display: 0 });
                }}
                className="close-window-wrapper"
              >
                <ArrowDropDownIcon className="close-window" />
              </IconButton>
            </span>
          </div>
          <div className="chat-room bg-secondary">
            <ServerChat />
            <ClientChat />
          </div>
          <div className="type-area">
            <div className="input-wrapper">
              <input
                type="text"
                id="inputText"
                className="text-white bg-dark"
                placeholder="Type messages here..."
                value={this.state.query}
                autoComplete="off"
                onChange={(e) => this.setState({ query: e.target.value })}
              />
            </div>
            <button
              className="button-send bg-dark text-primary"
              onClick={this.sendQuery}
            >
              Send
            </button>
          </div>
        </div>
      );
    }
  }
}

export default TalkToUs;

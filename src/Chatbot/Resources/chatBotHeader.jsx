import React from "react";
import LOGO from "./logo.png";
import { CloseOutlined } from "@ant-design/icons";

const BotAvatar = (props) => {
  return (
    <div className="chat-bot-header">
      <div className="chat-bot-header-container">
        <div className="chat-bot-Header-image-container">
          <img
            src={LOGO}
            className="chat-bot-header-image"
            alt="cubedotsheader"
          ></img>
        </div>
        <div className="chat-bot-header-title">CubeDots</div>
        <div className="chat-bot-Header-close">
          <CloseOutlined className="chat-bot-Header-close-icon" onClick={() =>props.toggle()} />
        </div>
      </div>
    </div>
  );
};

export default BotAvatar;

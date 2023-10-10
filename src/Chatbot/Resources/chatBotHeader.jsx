import React from "react";
import LOGO from "./logo.png";
import { MinusOutlined, PoweroffOutlined } from "@ant-design/icons";

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
          
          <MinusOutlined className="chat-bot-Header-close-icon" onClick={() =>props.toggle()} />
          <PoweroffOutlined className="chat-bot-Header-power-icon" onClick={() =>props.reset()}/>
        </div>
      </div>
    </div>
  );
};

export default BotAvatar;

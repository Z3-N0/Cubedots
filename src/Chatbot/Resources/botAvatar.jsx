import React from "react";
import Logo from "./logo.png";

const BotAvatar = () => {
  return (
    <div className="chat-bot-avatar">
      <div className="chat-bot-avatar-container">
        <img src={Logo} alt='cubedotsLogo' className="chat-bot-avatar-icon"></img>
      </div>
    </div>
  );
};

export default BotAvatar;
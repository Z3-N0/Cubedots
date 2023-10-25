import React from "react";
import Logo from "./logo.png";

const BotAvatar = () => {
  const time = new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: "numeric",
    minute: "numeric"
  });
  return (
    <div className="chat-bot-avatar">
      <div className="chat-bot-avatar-container">
        <img src={Logo} alt='cubedotsLogo' className="chat-bot-avatar-icon"/>
      </div>
      <p style={{ fontSize: 10, marginTop: 5, marginBottom: 0, color:'grey'}}>{time}</p>
    </div>
  );
};

export default BotAvatar;
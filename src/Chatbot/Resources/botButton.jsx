import React from "react";
import Logo from "./logo.png";

const BotButton = () => {
  return (
    <div className="chat-bot-avatar">
        <img src={Logo} alt='cubedotsLogo' className="app-chatbot-button-icon"></img>
    </div>
  );
};

export default BotButton;
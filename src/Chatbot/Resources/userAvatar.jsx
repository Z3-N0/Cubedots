import React from "react";
import Logo from "./person-circle.svg";

const BotAvatar = () => {
  return (
    <div>
      <div className="react-chatbot-kit-user-avatar-container">
        <img src={Logo} alt='user' className="react-chatbot-kit-user-avatar-icon"></img>
      </div>
    </div>
  );
};

export default BotAvatar;
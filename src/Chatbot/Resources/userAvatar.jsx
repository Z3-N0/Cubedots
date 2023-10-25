import React from "react";
// import Logo from "./user.png";
import { BiSolidUserCircle } from "react-icons/bi";

const BotAvatar = () => {
  return (
    <div>
      <div className="react-chatbot-kit-user-avatar-container">
        < BiSolidUserCircle className="react-chatbot-kit-user-avatar-icon"/>
      </div>
    </div>
  );
};

export default BotAvatar;


import React from "react";
import {
  LinkOutlined
} from '@ant-design/icons';


const ToS = () => {

  return (
    <div className="react-chatbot-kit-chat-bot-message">
       Your personal data is very important to us. Before starting our conversation, you can read our Clarification Text Relating Personal Data Processing here - 
    <a className="links" href="https://www.cubedots.com/terms_and_conditions" target="_blank" rel="noreferrer noopener"> Terms and Condtions <LinkOutlined /> </a>
    </div>
  );
};

export default ToS;

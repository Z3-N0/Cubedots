/* src/App.js */
import React, { useState } from "react";
import { ConditionallyRender } from "react-util-kit";
import "./App.css";

import Chatbot from "react-chatbot-kit";
import ActionProvider from "./Chatbot/Actionprovider";
import MessageParser from "./Chatbot/MessageParser";
import config from "./Chatbot/Config";
import BotButton from "./Chatbot/Resources/botButton";
import TitleLogo from "./Chatbot/Resources/chatBotHeader";

const App = () => {
  const [showChatbot, setShowChatbot] = useState(true);

  const toggle = () => {
    setShowChatbot(false);
  };

  return (
    <div class="App-header">

      <div className="app-chatbot-container">
        <ConditionallyRender
          ifTrue={showChatbot}
          show={
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
              headerText={<TitleLogo toggle={toggle} />}
            />
          }
        />
      </div>

      <button
        className="app-chatbot-button"
        onClick={() => setShowChatbot((prev) => !prev)}
      >
        <BotButton />
      </button>
    </div>
  );
};

export default App;

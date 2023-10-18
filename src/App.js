import React, { useState } from "react";
import { ConditionallyRender } from "react-util-kit";
import { Modal, Button } from "antd";
import "./App.css";

import Chatbot from "react-chatbot-kit";
import ActionProvider from "./Chatbot/Actionprovider";
import MessageParser from "./Chatbot/MessageParser";
import config from "./Chatbot/Config";
import BotButton from "./Chatbot/Resources/botButton";
import TitleLogo from "./Chatbot/Resources/chatBotHeader";
import { Amplify } from "aws-amplify";
import { AWSLexV2Provider } from '@aws-amplify/interactions';

Amplify.addPluggable(new AWSLexV2Provider());

const awsConfig = {
  Auth: {
    identityPoolId: "us-east-1:f89dbe94-4a6d-4cdb-ae5b-5c4eb96a344e",
    region: "us-east-1"
  },
  Interactions: {
    // bots: {
    //   SampleBot: {
    //     name: "SampleBot",
    //     aliasId: "TSTALIASID",
    //     botId: "JDC2KP6P4J",
    //     localeId: "en_IN",
    //     region: "us-east-1",
    //     providerName: "AWSLexV2Provider",
    //   },
    // }
    bots: {
      "demo-bot": {
        name: "demo-bot",
        aliasId: "TSTALIASID",
        botId: "VP1DBBSR08",
        localeId: "en_US",
        region: "us-east-1",
        providerName: "AWSLexV2Provider",
      },
    }
  }
}

Amplify.configure(awsConfig);

const App = () => {
  const [showChatbot, setShowChatbot] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggle = () => {
    setShowChatbot(false);
  };
  const reset = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const validator = (input) => {
    if (!input.replace(/\s/g, "").length) return false;
    if (input.length > 1) return true;
    return false;
  };


  return (
    <div className="App-header">
      <div className="app-chatbot-container">
        <div className="modal-box">
          <Modal
            title="End Conversation"
            open={isModalOpen}
            footer={[
              <Button key="back" onClick={handleCancel}>
                No
              </Button>,
              <Button key="submit" type="primary" onClick={handleOk}>
                Yes
              </Button>,
            ]}
            width={200}
            bodyStyle={{ height: 50 }}
          >
            <p>Are you sure you want to end conversation?</p>
          </Modal>
        </div>
        <div>
          <ConditionallyRender
            ifTrue={showChatbot}
            show={
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
                headerText={<TitleLogo toggle={toggle} reset={reset} />}
                validator={validator}
              />
            }
          />
        </div>
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
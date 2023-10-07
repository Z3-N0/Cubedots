import { createChatBotMessage } from "react-chatbot-kit";
import TitleLogo from "./Resources/logo_cubedots.png";
import BotAvatar from './Resources/botAvatar'

import SampleWidget from './Widgets/SampleWidget/SampleWidget';
import Carousal from "./Widgets/Carousal/Carousal";

const config = {
  botName: <TitleLogo />,
  initialMessages: [
    createChatBotMessage(
      "Welcome to CubeDots"
    ),
    createChatBotMessage(
      "Your personal data is very important to us. Before starting our conversation, you can read our Clarification Text Relating Personal Data Processing by clicking on the link."
    ),
    createChatBotMessage(
      "cubedots was founded with a basic principle in mind.. do better. We were pioneers in the Turkish real estate market with technology and continue to lead the way in further evolving technology solutions to heighten our clients experience with us."
    ),
  ],
  widgets: [
    {
      widgetName: "samplewidget",
      widgetFunc: (props) => <SampleWidget {...props} />,
    },
    {
      widgetName: "carousal",
      widgetFunc: (props) => <Carousal {...props} />,
    }],
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
};

export default config;

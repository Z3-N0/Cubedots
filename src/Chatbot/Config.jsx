import { createChatBotMessage } from "react-chatbot-kit";
import TitleLogo from "./Resources/logo_cubedots.png";
import BotAvatar from './Resources/botAvatar'

import SampleWidget from './Widgets/SampleWidget/SampleWidget';
import Carousal from "./Widgets/Carousal/Carousal";
import ToS from "./Widgets/ToS/Tos";
import PropertyType from "./Widgets/PropertyType/PropertyType";
import YearComplete from "./Widgets/YearComplete/YearComplete"




const config = {
  botName: <TitleLogo />,
  initialMessages: [
    createChatBotMessage(
      "Welcome to CubeDots"
      , {
        loading: true,
        widget: 'ToS',
        terminateLoading: true,
      }
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
    },
    {
      widgetName: "ToS",
      widgetFunc: (props) => <ToS {...props} />,
    },
    {
      widgetName: "PropertyType",
      widgetFunc: (props) => <PropertyType {...props} />,
    },
    {
      widgetName: "YearComplete",
      widgetFunc: (props) => <YearComplete {...props} />,
    },
  ],
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
};

export default config;

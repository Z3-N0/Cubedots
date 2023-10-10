import { createChatBotMessage } from "react-chatbot-kit";
import TitleLogo from "./Resources/logo_cubedots.png";
import BotAvatar from "./Resources/botAvatar";

import SampleWidget from "./Widgets/SampleWidget/SampleWidget";
import Carousal from "./Widgets/Carousal/Carousal";
import ToS from "./Widgets/ToS/Tos";
import PropertyType from "./Widgets/PropertyType/PropertyType";
import YearComplete from "./Widgets/YearComplete/YearComplete";
import Name from "./Widgets/Name/Name";
import Occupation from "./Widgets/Occupation/Occupation";
import Location from "./Widgets/Location/Location";
import PriceRange from "./Widgets/PriceRange/PriceRange";
import Facilities from "./Widgets/Facilities/Facilities";
import Projects from "./Widgets/Projects/Projects";


const myDate = new Date();
const hrs = myDate.getHours();

let greet;

if (hrs < 12)
  greet = 'Good Morning, Welcome to Cubedots.';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon, Welcome to Cubedots.';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening, Welcome to Cubedots.';
const config = {
  botName: <TitleLogo />,
  initialMessages: [
    createChatBotMessage(greet),
    createChatBotMessage(
      "Cubedots was founded with a fundamental principle in mind. do better. We were pioneers in the Turkish real estate market with technology and continue to lead the way in further evolving technology solutions to heighten our client's experience with us.",
      {
        loading: true,
        widget: "Name",
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
      widgetName: "Name",
      widgetFunc: (props) => <Name {...props} />,
    },
    {
      widgetName: "Occupation",
      widgetFunc: (props) => <Occupation {...props} />,
    },
    {
      widgetName: "PropertyType",
      widgetFunc: (props) => <PropertyType {...props} />,
    },
    {
      widgetName: "Location",
      widgetFunc: (props) => <Location {...props} />,
    },
    {
      widgetName: "PriceRange",
      widgetFunc: (props) => <PriceRange {...props} />,
    },
    {
      widgetName: "Facilities",
      widgetFunc: (props) => <Facilities {...props} />,
    },
    {
      widgetName: "Projects",
      widgetFunc: (props) => <Projects {...props} />,
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

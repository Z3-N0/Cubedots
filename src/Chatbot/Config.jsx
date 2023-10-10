import { createChatBotMessage } from "react-chatbot-kit";
import TitleLogo from "./Resources/logo_cubedots.png";
import BotAvatar from "./Resources/botAvatar";
import MyUserAvatar from "./Resources/userAvatar";

import SampleWidget from "./Widgets/SampleWidget/SampleWidget";
import Carousal1 from "./Widgets/Carousal1/Carousal1";
import Carousal2 from "./Widgets/Carousal2/Carousal2";
import ToS from "./Widgets/ToS/Tos";
import PropertyType from "./Widgets/PropertyType/PropertyType";
import YearComplete from "./Widgets/YearComplete/YearComplete";
import Name from "./Widgets/Name/Name";
import Occupation from "./Widgets/Occupation/Occupation";
import Location from "./Widgets/Location/Location";
import PriceRange from "./Widgets/PriceRange/PriceRange";
import Facilities from "./Widgets/Facilities/Facilities";
import Projects from "./Widgets/Projects/Projects";
import Details from "./Widgets/Details/Details";


const myDate = new Date();
const hrs = myDate.getHours();

let greet;

if (hrs < 12)
  greet = 'Hi👋, Good Morning, Welcome to Cubedots.';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Hi👋, Good Afternoon, Welcome to Cubedots.';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Hi👋, Good Evening, Welcome to Cubedots.';
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
      widgetName: "carousal1",
      widgetFunc: (props) => <Carousal1 {...props} />,
    },
    {
      widgetName: "carousal2",
      widgetFunc: (props) => <Carousal2 {...props} />,
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
      widgetName: "Details",
      widgetFunc: (props) => <Details {...props} />,
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
    userAvatar: (props) => <MyUserAvatar {...props} />,

  },
};

export default config;

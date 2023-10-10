// import { Amplify, Interactions } from "aws-amplify";
//import { AWSLexV2Provider } from '@aws-amplify/interactions';
// import awsconfig from "./aws-exports";
import { createClientMessage } from "react-chatbot-kit";

// Amplify.configure({
//   Auth: {
//     identityPoolId: "us-east-1:ee852981-5624-4239-b5dc-93c4b8c505c8",
//     region: "us-east-1",
//   },
//   Interactions: {
//     bots: {
//       Intercity_lexuser: {
//         name: "Intercity_lexuser",
//         alias: "$LATEST",
//         region: "us-east-1",
//       },
//     },
//   },
// });

// Amplify.configure(awsconfig);

async function push(message) {
  console.log(message);
  return "Received";
}

// async function fetchColor(values) {

//   return new Promise(async(resolve, reject) =>{
//     fetch('https://vezdu12671.execute-api.us-east-1.amazonaws.com/Stage_1/color-fetch', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(values)
//     })
//    .then(response => response.json())
//     .then(data => {
//       resolve(data['body'])
//     })
//     .catch(error => console.error(error));

//   })
// };

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async sendResp(message) {
    let updmsg = createClientMessage(message, {
      loading: true,
      terminateLoading: true,
    });
    this.updateChatbotState(updmsg);
  }

  async handleResp(message) {
    const lowerCaseMessage = message.toLowerCase();
    let resp = await push(lowerCaseMessage);
    let updmsg = this.createChatBotMessage(resp, {
      loading: true,
      terminateLoading: true,
    });
    this.updateChatbotState(updmsg);
  }

  async name(message) {
    let send = await push(message);
    console.log(send);
    const resp = "Select your occupation";
    let updmsg = this.createChatBotMessage(resp, {
      widget: "Occupation",
      loading: true,
      terminateLoading: true,
    });
    this.updateChatbotState(updmsg);
  }

  async occupationType(message) {
    let send = await push(message);
    console.log(send);
    let resp =
      "Currently, we offer the following project types - please select which one you would like:";
    let updmsg = this.createChatBotMessage(resp, {
      widget: "PropertyType",
      loading: true,
      terminateLoading: true,
    });
    this.updateChatbotState(updmsg);
  }

  async propertyType(message) {
    let send = await push(message);
    console.log(send);
    let resp = "Please Enter your Mobile Number";
    let updmsg = this.createChatBotMessage(resp, {
      loading: true,
      terminateLoading: true,
    });
    this.updateChatbotState(updmsg);
  }

  async phone(message) {
    let send = await push(message);
    console.log(send);
    const resp = "Please Enter the location you would like to view.";
    let updmsg = this.createChatBotMessage(resp, {
      widget: "Location",
      loading: true,
      terminateLoading: true,
    });
    this.updateChatbotState(updmsg);
  }

  async locationType(message) {
    let send = await push(message);
    console.log(send);
    let resp =
      "We offer the projects in the below price range. Select your budget to proceed: ";
    let updmsg = this.createChatBotMessage(resp, {
      widget: "PriceRange",
      loading: true,
      terminateLoading: true,
    });
    this.updateChatbotState(updmsg);
  }

  async priceRangeType(message) {
    let send = await push(message);
    console.log(send);
    let resp =
      "Which facility would you like to have near your residence to be easily accessible ";
    let updmsg = this.createChatBotMessage(resp, {
      widget: "Facilities",
      loading: true,
      terminateLoading: true,
    });
    this.updateChatbotState(updmsg);
  }
  async facilitiesType(message) {
    let send = await push(message);
    console.log(send);
    let resp =
      "We are pleased to inform you that our projects are in a few strategic locations. Please select a project to view its location on a map and its gallery views:  ";
    let updmsg = this.createChatBotMessage(resp, {
      widget: "Projects",
      loading: true,
      terminateLoading: true,
    });
    this.updateChatbotState(updmsg);
  }
  async projectsType(message) {
    let send = await push(message);
    console.log(send);
    let resp =
      "Sample images of the chosen property  ";
    let updmsg = this.createChatBotMessage(resp, {
      widget: "carousal",
      loading: true,
      terminateLoading: true,
    });
    this.updateChatbotState(updmsg);
  }

  async widgetSample() {
    let resp = "sample options";
    let updmsg = this.createChatBotMessage(resp, {
      loading: true,
      widget: "YearComplete",
      terminateLoading: true,
    });
    this.updateChatbotState(updmsg);
  }

  async carousal() {
    let resp = "sample carousal";
    let updmsg = this.createChatBotMessage(resp, {
      widget: "carousal",
      loading: true,
      terminateLoading: true,
    });
    this.updateChatbotState(updmsg);
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;

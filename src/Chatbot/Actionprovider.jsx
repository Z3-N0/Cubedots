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
  return "sample";
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

  async widgetSample(){
    let resp = "sample options";
    let updmsg = this.createChatBotMessage(resp, {
      loading: true,
      widget: 'YearComplete',
      terminateLoading: true,
    });
    this.updateChatbotState(updmsg);
  }

  async carousal(){
    let resp = 'sample carousal';
    let updmsg = this.createChatBotMessage(resp, {
      widget: 'carousal',
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

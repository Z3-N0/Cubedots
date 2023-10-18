import { createClientMessage } from "react-chatbot-kit";



async function push(message) {
  console.log(message);
  return "Received";
}

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

  async start() {
    const resp = "Cubedots was founded with a fundamental principle in mind. do better. We were pioneers in the Turkish real estate market with technology and continue to lead the way in further evolving technology solutions to heighten our client's experience with us.";
    let updmsg = this.createChatBotMessage(resp, {
      widget: "Name",
      loading: true,
      terminateLoading: true,
    });
    this.updateChatbotState(updmsg);
  }

  async name(message) {
    let send = await push(message);
    console.log(send);
    const resp = "Firstly, may I know who you are contacting us as?";
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
      widget: "Details",
      loading: true,
      terminateLoading: true,
    });
    this.updateChatbotState(updmsg);
  }

  async Details(message) {
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
        "Here are some details on the chosen project:";
      let updmsg = this.createChatBotMessage(resp, {
        widget: "carousal1",
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

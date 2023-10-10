class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }



  async parse(message) {
    const name = /^[a-zA-Z]+$/;
    const number = /^\d{10}$/;
    if (message === "widget") {
      this.actionProvider.widgetSample(message);
    } else if (message === "carousal") {
      this.actionProvider.carousal();
    } else if (name.test(message)){
      this.actionProvider.name(message);
    }else if (number.test(message)){
      this.actionProvider.phone(message);
    }else {
      this.actionProvider.handleResp(message);
    }
  }
}

export default MessageParser;

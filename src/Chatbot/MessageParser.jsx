class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }



  async parse(message) {
    const name = /^[a-zA-Z]+$/;
    if (message === "widget") {
      this.actionProvider.widgetSample(message);
    } else if (message === "carousal") {
      this.actionProvider.carousal();
    } else if (name.test(message)){
      this.actionProvider.name(message);
    }else {
      this.actionProvider.handleResp(message);
    }
  }
}

export default MessageParser;

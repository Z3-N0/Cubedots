class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  async parse(message) {
    if (message === "widget") {
      this.actionProvider.widgetSample(message);
    } else if(message === 'carousal'){
      this.actionProvider.carousal();
    }
    else {
      this.actionProvider.handleResp(message);
    }
  }
}

export default MessageParser;

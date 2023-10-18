import React, {useEffect} from "react";
import { getAllProjectDetails } from "../../api";

const ToS = (props) => {
  const { setState } = props;

  useEffect(() => {
    getAllProjectDetails().then(
      (values) => {
        setState((state) => ({
          ...state,
          dataBlob: values,
        }));
      });
      console.log('settingstate');
  }, []);

  return (
    <div className="react-chatbot-kit-chat-bot-message">
       Please enter your name
    </div>
  );
};

export default ToS;

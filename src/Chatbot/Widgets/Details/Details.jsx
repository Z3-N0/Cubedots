import React from "react";
import "../PrimaryStyle.css";
import { Form, Input} from "antd";


// async function fetchfacilitiesTypes(values) {

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
//       resolve(data)
//       console.log(data)
//     })
//     .catch(error => console.error(error));
//   })
// };
// let facilitiesTypes = await fetchfacilitiesTypes('fetch types');

const facilitiesTypeSelector = (props) => {
  const { setState, actionProvider } = props;

  const setType = async (Type) => {
    setState((state) => ({
      ...state,
      facilitiesType: Type,
    }));
    actionProvider.Details(Type);
  };

  // let facilitiesTypeList = facilitiesTypes.map((facilitiesType,index)=>{
  //   return(<button
  //       className="facilitiess-selector-button"
  //       onClick={() => setType(facilitiesType.name)}>
  //         {facilitiesType.name}
  //   </button>)});

  return (
    <div className="react-chatbot-kit-chat-bot-message">
      <Form onFinish={setType}>
        <Form.Item
          name="Phone"
          label="Phone "
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Email"
          label="Email Id"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <button htmltype="submit" className="checkbox-options-selector-button">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default facilitiesTypeSelector;

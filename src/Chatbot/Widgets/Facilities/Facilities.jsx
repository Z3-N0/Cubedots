import React from "react";
import "../PrimaryStyle.css";
import { Checkbox, Form } from "antd";

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
    actionProvider.facilitiesType(Type);
  };

  // let facilitiesTypeList = facilitiesTypes.map((facilitiesType,index)=>{
  //   return(<button
  //       className="facilitiess-selector-button"
  //       onClick={() => setType(facilitiesType.name)}>
  //         {facilitiesType.name}
  //   </button>)});

  return (
    <div className="option-selector-container">
        <Form onFinish={setType} className="option-selector-button-container ">
          <Form.Item name="Airport" valuePropName="checked">
            <Checkbox>Airport</Checkbox>
          </Form.Item>
          <Form.Item name="Public Transport" valuePropName="checked">
            <Checkbox>Public Transport</Checkbox>
          </Form.Item>
          <Form.Item name="Mall" valuePropName="checked">
            <Checkbox>Mall</Checkbox>
          </Form.Item>
          <Form.Item name="Hospital" valuePropName="checked">
            <Checkbox>Hospital</Checkbox>
          </Form.Item>
          <button htmltype="submit" className="options-selector-button">
            Submit
          </button>
        </Form>
    </div>
  );
};

export default facilitiesTypeSelector;

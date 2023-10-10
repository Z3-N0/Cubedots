import React from "react";
import "../PrimaryStyle.css";

// async function fetchoccupationTypes(values) {

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
// let occupationTypes = await fetchoccupationTypes('fetch types');

const occupationTypeSelector = (props) => {
  const { setState, actionProvider } = props;

  const setType = async (Type) => {
    setState((state) => ({
      ...state,
      occupationType: Type,
    }));
    actionProvider.occupationType(Type);
    actionProvider.sendResp(Type);
  };

  // let occupationTypeList = occupationTypes.map((occupationType,index)=>{
  //   return(<button
  //       className="occupations-selector-button"
  //       onClick={() => setType(occupationType.name)}>
  //         {occupationType.name}
  //   </button>)});

  return (
    <div className="option-selector-container">
      <div className="option-selector-button-container">
        <button
          className="options-selector-button"
          onClick={() => setType("Real Estate Agency")}
        >
          Real Estate Agency
        </button>
        <button
          className="options-selector-button"
          onClick={() => setType("Developer")}
        >
          Developer
        </button>
        <button
          className="options-selector-button"
          onClick={() => setType("Other")}
        >
          Other
        </button>
      </div>
    </div>
  );
};

export default occupationTypeSelector;

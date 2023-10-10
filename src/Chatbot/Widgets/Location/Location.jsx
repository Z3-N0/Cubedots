import React from "react";
import "../PrimaryStyle.css";

// async function fetchlocationTypes(values) {

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
// let locationTypes = await fetchlocationTypes('fetch types');

const locationTypeSelector = (props) => {
  const { setState, actionProvider } = props;

  const setType = async (Type) => {
    setState((state) => ({
      ...state,
      locationType: Type,
    }));
    actionProvider.locationType(Type);
    actionProvider.sendResp(Type);
  };

  // let locationTypeList = locationTypes.map((locationType,index)=>{
  //   return(<button
  //       className="locations-selector-button"
  //       onClick={() => setType(locationType.name)}>
  //         {locationType.name}
  //   </button>)});

  return (
    <div className="option-selector-container">
      <div className="option-selector-button-container">
        <button
          className="options-selector-button"
          onClick={() => setType("Turkey")}
        >
          Turkey
        </button>
        <button
          className="options-selector-button"
          onClick={() => setType("UAE")}
        >
          UAE
        </button>
      </div>
    </div>
  );
};

export default locationTypeSelector;

import React from "react";
import "../PrimaryStyle.css";

// async function fetchpriceRangeTypes(values) {

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
// let priceRangeTypes = await fetchpriceRangeTypes('fetch types');

const priceRangeTypeSelector = (props) => {
  const { setState, actionProvider } = props;

  const setType = async (Type) => {
    setState((state) => ({
      ...state,
      priceRangeType: Type,
    }));
    actionProvider.priceRangeType(Type);
    actionProvider.sendResp(Type);
  };

  // let priceRangeTypeList = priceRangeTypes.map((priceRangeType,index)=>{
  //   return(<button
  //       className="priceRanges-selector-button"
  //       onClick={() => setType(priceRangeType.name)}>
  //         {priceRangeType.name}
  //   </button>)});

  return (
    <div className="option-selector-container">
      <div className="option-selector-button-container">
        <button
          className="options-selector-button"
          onClick={() => setType("$1M to $3M")}
        >
          $1M to $3M
        </button>
        <button
          className="options-selector-button"
          onClick={() => setType("$4M to $6M")}
        >
          $4M to $6M
        </button>
        <button
          className="options-selector-button"
          onClick={() => setType("$7M to $10M")}
        >
          $7M to $10M
        </button>
      </div>
    </div>
  );
};

export default priceRangeTypeSelector;

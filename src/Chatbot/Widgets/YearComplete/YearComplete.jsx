import React from "react";
import "./YearComplete.css";

// async function fetchyearTypes(values) {

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
// let yearTypes = await fetchyearTypes('fetch types');

const yearTypeSelector = (props) => {
  const { setState, actionProvider } = props;

  const setType = async (Type) => {
    setState((state) => ({
      ...state,
      yearType: Type,
    }));
    actionProvider.handleResp(Type);
    actionProvider.sendResp(Type);
  };

  // let yearTypeList = yearTypes.map((yearType,index)=>{
  //   return(<button
  //       className="years-selector-button"
  //       onClick={() => setType(yearType.name)}>
  //         {yearType.name}
  //   </button>)});

  return (
    <div className="year-selector-container">
      <div className="year-selector-button-container">
        <button
          className="years-selector-button"
          onClick={() => setType("Ready to Move")}
        >
          Ready to move
        </button>
        <button
          className="years-selector-button"
          onClick={() => setType("2023")}
        >
          2023
        </button>
        <button
          className="years-selector-button"
          onClick={() => setType("2024")}
        >
          2024
        </button>
        <button
          className="years-selector-button"
          onClick={() => setType("2025")}
        >
          2025
        </button>
      </div>
    </div>
  );
};

export default yearTypeSelector;

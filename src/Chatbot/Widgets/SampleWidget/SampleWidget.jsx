import React from "react";
import "./SampleWidget.css";

// async function fetchCarTypes(values) {

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
// let carTypes = await fetchCarTypes('fetch types');

const CarTypeSelector = (props) => {
  const { setState, actionProvider } = props;

  const setType = async (Type) => {
    setState((state) => ({
      ...state,
      carType: Type,
    }));
    actionProvider.handleResp(Type);
    actionProvider.sendResp(Type);
  };

  // let carTypeList = carTypes.map((carType,index)=>{
  //   return(<button
  //       className="cars-selector-button"
  //       onClick={() => setType(carType.name)}>
  //         {carType.name}
  //   </button>)});

  return (
    <div className="car-selector-container">
      <div className="car-selector-button-container">
        <button
          className="cars-selector-button"
          onClick={() => setType("Item1")}
        >
          Item 1
        </button>
        <button
          className="cars-selector-button"
          onClick={() => setType("Item2")}
        >
          Item 2
        </button>
        <button
          className="cars-selector-button"
          onClick={() => setType("Item3")}
        >
          Item 3
        </button>
      </div>
    </div>
  );
};

export default CarTypeSelector;

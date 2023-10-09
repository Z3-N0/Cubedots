import React from "react";
import "./PropertyType.css";

// async function fetchpropertyTypes(values) {

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
// let propertyTypes = await fetchpropertyTypes('fetch types');

const propertyTypeSelector = (props) => {
  const { setState, actionProvider } = props;

  const setType = async (Type) => {
    setState((state) => ({
      ...state,
      propertyType: Type,
    }));
    actionProvider.handleResp(Type);
    actionProvider.sendResp(Type);
  };

  // let propertyTypeList = propertyTypes.map((propertyType,index)=>{
  //   return(<button
  //       className="propertys-selector-button"
  //       onClick={() => setType(propertyType.name)}>
  //         {propertyType.name}
  //   </button>)});

  return (
    <div className="property-selector-container">
      <div className="property-selector-button-container">
        <button
          className="propertys-selector-button"
          onClick={() => setType("Apartments")}
        >
          Apartments
        </button>
        <button
          className="propertys-selector-button"
          onClick={() => setType("Villas")}
        >
          Villas
        </button>
      </div>
    </div>
  );
};

export default propertyTypeSelector;

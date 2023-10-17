/* eslint-disable array-callback-return */
import React from "react";
import "../PrimaryStyle.css";
import { getAllProject } from "../../api";

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
let initialList = [];

async function fetchPropertyTypes(){
  await Promise.all([getAllProject()]).then((values) => {
    values[0].map((value) => {
      initialList.push(value.propertyType);
    });
  });
  // console.log("initial list:", initialList)
  return initialList;
}


let propertyTypes = await fetchPropertyTypes()
propertyTypes = removeDuplicates(propertyTypes);
// console.log("propertyTypeList: ", propertyTypes);

const PropertyTypeSelector = (props) => {
  const { setState, actionProvider } = props;


  const setType = async (Type) => {
    setState((state) => ({
      ...state,
      propertyType: Type,
    }));
    actionProvider.propertyType(Type);
    actionProvider.sendResp(Type);
  };

  let propertyTypeList = propertyTypes.map((propertyType,index)=>{
    return(<button
        className="options-selector-button"
        onClick={() => setType(propertyType)}>
          {propertyType}
    </button>)});

  return (
    <div className="option-selector-container">
      <div className="option-selector-button-container">
        {propertyTypeList}
      </div>
    </div>
  );
};

export default PropertyTypeSelector;
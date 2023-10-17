/* eslint-disable array-callback-return */
import React from "react";
import "../PrimaryStyle.css";
import { getAllProject } from "../../api";

let initialList = [];
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

async function fetchLocationTypes() {
  await Promise.all([getAllProject()]).then((values) => {
    values[0].map((value) => {
      initialList.push(value.country);
    });
  });
  // console.log("initial list:", initialList)
  return initialList;
}

let locationTypes = await fetchLocationTypes();
locationTypes = removeDuplicates(locationTypes);

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

  let locationTypeList = locationTypes.map((locationType, index) => {
    return (
      <button
        className="options-selector-button"
        onClick={() => setType(locationType)}
      >
        {locationType}
      </button>
    );
  });

  return (
    <div className="option-selector-container">
      <div className="option-selector-button-container">{locationTypeList}</div>
    </div>
  );
};

export default locationTypeSelector;

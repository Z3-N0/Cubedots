/* eslint-disable array-callback-return */
import React from "react";
import "../PrimaryStyle.css";
import { getAllProject } from "../../api";

let initialList = [];

async function fetchProjectTypes() {
  await Promise.all([getAllProject()]).then((values) => {
    values[0].map((value) => {
      initialList.push(value.city);
    });
  });
  // console.log("initial list:", initialList)
  return initialList;
}

let projectsTypes = await fetchProjectTypes();

const projectsTypeSelector = (props) => {
  const { setState, actionProvider } = props;

  const setType = async (Type) => {
    setState((state) => ({
      ...state,
      projectsType: Type,
    }));
    actionProvider.projectsType(Type);
    actionProvider.sendResp(Type);
  };

  let projectsTypeList = projectsTypes.map((projectsType, index) => {
    return (
      <button
        className="options-selector-button"
        onClick={() => setType(projectsType)}
      >
        {projectsType}
      </button>
    );
  });

  return (
    <div className="option-selector-container">
      <div className="option-selector-button-container">{projectsTypeList}</div>
    </div>
  );
};

export default projectsTypeSelector;

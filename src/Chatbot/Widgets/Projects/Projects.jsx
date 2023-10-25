/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "../PrimaryStyle.css";
// import { Spin } from "antd";

const ProjectsTypeSelector = (props) => {
  const { setState, actionProvider } = props;
  const [projectTypes, setProjectTypes] = useState([]);

  useEffect(() => {
    console.log(props.state);
    const blob = props?.state?.dataBlob;
    const location = props?.state?.locationType;
    const property = props?.state?.propertyType;
    const facilitiesList = props?.state?.facilitiesType;
    let facilities = [];
    for(var key in facilitiesList)
    {
      if (facilitiesList[key] === true)
      {
        facilities.push(key);
      }
    }
    
    let filtered_properties = [];
    let len = blob.length;
    for(let i = 0; i < len; ++i)
    {
      let hasAllElems = facilities.every(elem => blob[i].amenities.includes(elem));
      if(blob[i].country === location && blob[i].propertyType === property && hasAllElems)
      {
        filtered_properties.push(blob[i]);
      }
    }
    const temp = filtered_properties.map((value) => value?.city);
    setProjectTypes([...new Set(temp)]);
  }, [props]);

  const setType = async (Type) => {
    setState((state) => ({
      ...state,
      projectsType: Type,
    }));
    actionProvider.projectsType(Type);
    actionProvider.sendResp(Type);
  };



  return (
    <div className="option-selector-container">
      <div className="option-selector-button-container">
        {projectTypes?.length > 0 ? (
          projectTypes?.map((propertyType, index) => {
            return (
              <button
                className="options-selector-button"
                onClick={() => setType(propertyType)}
                key={index}
              >
                {propertyType}
              </button>
            );
          })
        ) : (
          <div className="carousal-message">
            Projects with chosen preference Does not exist!
          </div>
          // <Spin
          //   style={{
          //     color: "orange",
          //   }}
          // />
        )}
      </div>
    </div>
  );
};

export default ProjectsTypeSelector;

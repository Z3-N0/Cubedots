/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "../PrimaryStyle.css";
import { Spin } from "antd";

const ProjectsTypeSelector = (props) => {
  const { setState, actionProvider } = props;
  const [projectTypes, setProjectTypes] = useState([]);

  useEffect(() => {
    const temp = props?.state?.dataBlob?.map((value) => value?.city);
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
          <Spin
            style={{
              color: "orange",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsTypeSelector;

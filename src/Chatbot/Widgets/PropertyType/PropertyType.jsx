/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "../PrimaryStyle.css";
import { Spin } from 'antd';

const PropertyTypeSelector = (props) => {
  const { setState, actionProvider } = props;
  const [propertyTypes, setPropertyTypes] = useState([]);

  useEffect(() => {   
    const temp = props?.state?.dataBlob?.map((value) => value?.propertyType)
    setPropertyTypes([...new Set(temp)]);
  }, [props]);

  const setType = async (Type) => {
    setState((state) => ({
      ...state,
      propertyType: Type,
    }));
    actionProvider.propertyType(Type);
    actionProvider.sendResp(Type);
  };

  return (
    <div className="option-selector-container">
      <div className="option-selector-button-container">
        {propertyTypes?.length > 0 ? propertyTypes?.map((propertyType, index) => {
          return (
            <button
              className="options-selector-button"
              onClick={() => setType(propertyType)}
              key={index}
            >
              {propertyType}
            </button>
          );
        }):<Spin style={{
          color : "orange"
        }}/>}
      </div>
    </div>
  );
};

export default PropertyTypeSelector;

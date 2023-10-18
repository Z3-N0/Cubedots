/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "../PrimaryStyle.css";
import { Spin } from "antd";

const LocationTypeSelector = (props) => {
  const { setState, actionProvider } = props;
  const [locationTypes, setLocationTypes] = useState([]);

  useEffect(() => {
    const temp = props?.state?.dataBlob?.map((value) => value?.country);
    setLocationTypes([...new Set(temp)]);
  }, [props]);

  const setType = async (Type) => {
    setState((state) => ({
      ...state,
      locationType: Type,
    }));
    actionProvider.locationType(Type);
    actionProvider.sendResp(Type);
  };

  return (
    <div className="option-selector-container">
      <div className="option-selector-button-container">
        {locationTypes?.length > 0 ? (
          locationTypes?.map((propertyType, index) => {
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

export default LocationTypeSelector;

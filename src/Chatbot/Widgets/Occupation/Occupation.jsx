import React from "react";
import "../PrimaryStyle.css";



const OccupationTypeSelector = (props) => {
  const { setState, actionProvider } = props;

  

  const setType = async (Type) => {
    setState((state) => ({
      ...state,
      occupationType: Type,
    }));
    actionProvider.occupationType(Type);
    actionProvider.sendResp(Type);
  };


  return (
    <div className="option-selector-container">
      <div className="option-selector-button-container">
        <button
          className="options-selector-button"
          onClick={() => setType("Real Estate Agency")}
        >
          Real Estate Agency
        </button>
        <button
          className="options-selector-button"
          onClick={() => setType("Developer")}
        >
          Developer
        </button>
        <button
          className="options-selector-button"
          onClick={() => setType("Other")}
        >
          Other
        </button>
      </div>
    </div>
  );
};

export default OccupationTypeSelector;

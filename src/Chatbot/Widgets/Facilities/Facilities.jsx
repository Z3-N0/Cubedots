/* eslint-disable array-callback-return */
import React from "react";
import "../PrimaryStyle.css";
import { Checkbox, Form } from "antd";
import { getAllProject } from "../../api";

let initialList = [];
let buffer = [];
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

async function fetchLocationTypes() {
  await Promise.all([getAllProject()]).then((values) => {
    values[0].map((value) => {
      buffer = value.amenities;
      buffer.map((val) => {
        initialList.push(val);
      });
    });
  });
  // console.log("initial list:", initialList)
  return initialList;
}

let amenities = await fetchLocationTypes();
amenities = removeDuplicates(amenities);

const facilitiesTypeSelector = (props) => {
  const { setState, actionProvider } = props;

  const setType = async (Type) => {
    setState((state) => ({
      ...state,
      facilitiesType: Type,
    }));
    actionProvider.facilitiesType(Type);
  };

  let amenitiesList = amenities.map((facility, index) => {
    return (
      <Form.Item name={facility} valuePropName="checked">
        <Checkbox>{facility}</Checkbox>
      </Form.Item>
    );
  });

  return (
    <div className="checkbox-message">
      <div className="option-selector-container">
        <Form onFinish={setType}>
          <div className="checkbox-selector-button-container">
            {amenitiesList}
          </div>
          <button
            htmltype="submit"
            className="checkbox-options-selector-button"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default facilitiesTypeSelector;

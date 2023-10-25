/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "../PrimaryStyle.css";
import { Checkbox, Form, Spin } from "antd";

const FacilitiesTypeSelector = (props) => {
  const { setState, actionProvider } = props;
  const [amenity, setAmenity] = useState([]);

  useEffect(() => {
    let temp = [];
    let buffer;
    props?.state?.dataBlob?.map((prop) => {
      buffer = prop.amenities;
      buffer.map((val) => {
        temp.push(val);
      });
    });
    setAmenity([...new Set(temp)]);
  }, [props]);

  const setType = async (Type) => {
    setState((state) => ({
      ...state,
      facilitiesType: Type,
    }));
    actionProvider.facilitiesType(Type);
  };

  let amenitiesList = amenity.map((facility, index) => {
    return (
      <Form.Item name={facility} valuePropName="checked" key={index}>
        <Checkbox>{facility}</Checkbox>
      </Form.Item>
    );
  });

  return (
    <div className="checkbox-message">
        <Form onFinish={setType}>
          <div className="checkbox-selector-container">
            {amenity?.length > 0 ? (
              amenitiesList
            ) : (
              <Spin
                style={{
                  color: "orange",
                }}
              />
            )}
          </div>
          <button
            htmltype="submit"
            className="checkbox-options-selector-button"
          >
            Submit
          </button>
        </Form>
      </div>
  );
};

export default FacilitiesTypeSelector;

import React from "react";
import { Carousel } from 'antd';

const Carousalsample = (props) => {
  // const { setState, actionProvider } = props;

  // const setType = async (Type) => {
  //   setState((state) => ({
  //     ...state,
  //     carType: Type,
  //   }));
  //   actionProvider.handleResp(Type);
  //   actionProvider.sendResp(Type);
  // };
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <Carousel autoplay dotPosition='right' fade>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
  );
};

export default Carousalsample;

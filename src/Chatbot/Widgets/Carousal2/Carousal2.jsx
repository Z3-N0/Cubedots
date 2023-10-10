import React, { useRef } from "react";
import "../PrimaryStyle.css";
import { Carousel, Row, Col } from "antd";
import img1 from "../../../Chatbot/Resources/Istanbul/1.jpg";
import img2 from "../../../Chatbot/Resources/Istanbul/2.jpg";
import img3 from "../../../Chatbot/Resources/Istanbul/3.jpg";
import img4 from "../../../Chatbot/Resources/Istanbul/3.jpg";
import {RightCircleOutlined , LeftCircleOutlined, LinkOutlined} from "@ant-design/icons";

const Carousalsample2 = (props) => {
  const slider = useRef(null);
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
    height: "100%",
    width: "100%",
    color: "#fff",
    objectFit:'cover',
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <>
    <div className= "carousal-message">
       Learn more about the project here 
    <a className="links" href="https://www.cubedots.com/projects/tema-istanbul-2" target="_blank" rel="noreferrer noopener"> Istanbul <LinkOutlined /> </a>
    </div>
    <Row align={"middle"}>
      <Col span={2}>
        <LeftCircleOutlined style={{fontSize: 25, color: "grey"}} onClick={() => slider.current.prev()}/>
      </Col>
      <Col span={20}>
        <Carousel ref={slider} fade >
          <div>
            <img style={contentStyle} src={img1} alt="Istanbul"></img>
          </div>
          <div>
            <img style={contentStyle} src={img2} alt="Istanbul"></img>
          </div>
          <div>
            <img style={contentStyle} src={img3} alt="Istanbul"></img>
          </div>
          <div>
            <img style={contentStyle} src={img4} alt="Istanbul"></img>
          </div>
        </Carousel>
      </Col>
      <Col span={2}>
        <RightCircleOutlined style={{fontSize: 25, color: "grey", marginLeft: 6}}  onClick={() => slider.current.next()}/>
      </Col>
    </Row>
    </>
  );
};

export default Carousalsample2;

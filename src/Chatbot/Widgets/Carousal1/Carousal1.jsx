/* eslint-disable array-callback-return */
import React from "react";
import "../PrimaryStyle.css";
// import { Carousel, Row, Col } from "antd";
// import img1 from "../../../Chatbot/Resources/NiKoru/1.jpg";
// import img2 from "../../../Chatbot/Resources/NiKoru/2.jpg";
// import img3 from "../../../Chatbot/Resources/NiKoru/3.jpg";
// import img4 from "../../../Chatbot/Resources/NiKoru/4.jpg";
// import {RightCircleOutlined , LeftCircleOutlined, LinkOutlined} from "@ant-design/icons";

import { getAllProject } from "../../api";

let initialList = [];

async function fetchProjects() {
  await Promise.all([getAllProject()]).then((values) => {
    values[0].map((value) => {
      initialList.push(value);
    });
  });
  // console.log("initial list:", initialList)
  return initialList;
}

let projects = await fetchProjects();

const Carousalsample = (props) => {
  let smallDesc = "";
  let medDesc = "";
  let projname = "";
  let proj = props.state.projectsType.trim();
  // const slider = useRef(null);

  projects.map((value) => {
    let name = value.city.trim();
    if (name === proj) {
      smallDesc = value.smallDescription;
      medDesc = value.mediumDescription;
      projname = value.title;
    }
  });

  // const contentStyle = {
  //   height: "100%",
  //   width: "100%",
  //   color: "#fff",

  //   objectFit:'cover',
  //   textAlign: "center",
  //   background: "#364d79",
  // };

  return (
    <>
      <div className="carousal-message">{projname}</div>
      <div className="carousal-message">{smallDesc}</div>
      <div className="carousal-message">{medDesc}</div>
      {/* <Row align={"middle"}>
      <Col span={2}>
        <LeftCircleOutlined style={{fontSize: 25, color: "grey"}} onClick={() => slider.current.prev()}/>
      </Col>
      <Col span={20}>
        <Carousel ref={slider} fade >
          <div>
            <img style={contentStyle} src={img1} alt="Nişantaşı Koru"></img>
          </div>
          <div>
            <img style={contentStyle} src={img2} alt="Nişantaşı Koru"></img>
          </div>
          <div>
            <img style={contentStyle} src={img3} alt="Nişantaşı Koru"></img>
          </div>
          <div>
            <img style={contentStyle} src={img4} alt="Nişantaşı Koru"></img>
          </div>
        </Carousel>
      </Col>
      <Col span={2}>
        <RightCircleOutlined style={{fontSize: 25, color: "grey", marginLeft: 6}}  onClick={() => slider.current.next()}/>
      </Col>
    </Row> */}
    </>
  );
};

export default Carousalsample;

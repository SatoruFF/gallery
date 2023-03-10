import React from "react";
import "../style/works.scss";
import first from "../assets/1.jpg";
import sec from "../assets/2.jpg";
import thir from "../assets/3.jpg";
import fou from "../assets/4.jpg";
import { Card, Divider, Typography } from "antd";
const {Text, Title, Paragraph} = Typography;

const Works = () => {
  return (
    <div className="works__wrapper animate__animated animate__fadeInUp">
      <div className="content__space content">
        <div className="works__first-slide">
          <Divider orientation="left">Contacts</Divider>
          <Typography>
            <Title level={3}>Social media</Title>
            <Paragraph>instagram: ffffff</Paragraph>
            <Paragraph>telegram: 000000</Paragraph>
            <Paragraph>twitter: dfdsfsd</Paragraph>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Works;

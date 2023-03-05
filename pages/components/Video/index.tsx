import React, { useState } from "react";
import Image from "next/image";
import { Modal, Form, Input, Button, Row, Col } from "antd";

import styles from "./index.module.css";

const Video = () => {
  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{ height: "100%", margin: "200px 0" }}
      >
        <Col span={12}>
          <video
            style={{ width: "100%" }}
            controls
            width="250"
            src="https://www.bilibili.com/18af4ba7-e722-45ed-b720-85b51f3d2631"
          >
            <source
              src="https://www.bilibili.com/18af4ba7-e722-45ed-b720-85b51f3d2631"
              type="video/webm"
            />
            <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
            Download the
          </video>
        </Col>
        <Col span={12}></Col>
      </Row>
    </>
  );
};

export default Video;

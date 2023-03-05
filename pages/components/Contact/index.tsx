import React, { useState } from "react";
import Image from "next/image";
import { Modal, Form, Input, Button, Row, Col } from "antd";

import styles from "./index.module.css";

const Contact = () => {
  return (
    <>
      <Row justify="space-around" align="middle" className={styles.container}>
        <Col>
          <Image
            src="/images/contact/CONTACT US.png"
            width={300}
            height={30}
            alt="buttonLogo"
          />
          <div style={{ marginTop: "30px" }}>
            <Input style={{ width: "600px" }} placeholder="Name"></Input>
          </div>
          <div>
            <Input
              style={{ width: "600px", margin: "10px 0" }}
              placeholder="E-mail"
            ></Input>
          </div>
        </Col>
        <Col style={{ textAlign: "right", marginTop: "100px" }}>
          <div>
            <Input.TextArea
              style={{ width: "600px", marginBottom: "10px", height: "80px" }}
              placeholder="Leave word"
            ></Input.TextArea>
          </div>
          <Button>Send</Button>
        </Col>
      </Row>
    </>
  );
};

export default Contact;

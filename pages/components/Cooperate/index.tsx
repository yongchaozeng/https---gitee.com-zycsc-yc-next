import React, { useState } from "react";
import Image from "next/image";
import { Modal, Form, Input, Button, Row, Col } from "antd";

import styles from "./index.module.css";

const Cooperate = () => {
  return (
    <>
      <Row justify="center" align="middle" className={styles.container}>
        <div>
          <Image
            src="/images/cooperate/Partner of Mnoize.png"
            width={600}
            height={48}
            alt="buttonLogo"
          />
          <Row justify={"space-between"} style={{ marginTop: 100 }} gutter={30}>
            <Image
              src="/images/cooperate/Rectangle 35.png"
              width={360}
              height={60}
              alt="buttonLogo"
            />
            <Image
              src="/images/cooperate/Rectangle 36.png"
              width={360}
              height={60}
              alt="buttonLogo"
            />
            <Image
              src="/images/cooperate/Rectangle 37.png"
              width={360}
              height={60}
              alt="buttonLogo"
            />
            <Image
              src="/images/cooperate/Rectangle 38.png"
              width={360}
              height={60}
              alt="buttonLogo"
            />
          </Row>
          <Row
            justify={"space-between"}
            gutter={30}
            style={{ margin: "20px 0" }}
          >
            <Image
              src="/images/cooperate/Rectangle 39.png"
              width={360}
              height={60}
              alt="buttonLogo"
            />
            <Image
              src="/images/cooperate/Rectangle 40.png"
              width={360}
              height={60}
              alt="buttonLogo"
            />
            <Image
              src="/images/cooperate/Rectangle 41.png"
              width={360}
              height={60}
              alt="buttonLogo"
            />
            <Image
              src="/images/cooperate/Rectangle 42.png"
              width={360}
              height={60}
              alt="buttonLogo"
            />
          </Row>
        </div>
      </Row>
    </>
  );
};

export default Cooperate;

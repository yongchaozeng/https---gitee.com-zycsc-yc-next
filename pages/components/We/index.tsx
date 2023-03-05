import React, { useState } from "react";
import Image from "next/image";
import { Modal, Form, Input, Button, Row, Col } from "antd";

import styles from "./index.module.css";

const Banner = () => {
  return (
    <>
      <Row justify="center" align="middle" className={styles.we}>
        <Row className={styles.box} justify="space-between" align="middle">
          <Col>
            <div>
              <Image
                className={styles.weImage}
                src="/images/we2.png"
                width={463}
                height={114}
                alt="buttonLogo"
              />
            </div>
            <div>
              <Image
                className={styles.text}
                src="/images/we3.png"
                width={468}
                height={77}
                alt="buttonLogo"
              />
            </div>
            <Row>
              <Row
                className={styles.buttonLeft}
                justify="center"
                align={"middle"}
              >
                <Image
                  src="/images/we4.png"
                  width={186}
                  height={19}
                  alt="buttonLogo"
                />
              </Row>
              <Row
                className={styles.buttonRight}
                justify="center"
                align={"middle"}
              >
                <Image
                  className={styles.weImage}
                  src="/images/we6.png"
                  width={221}
                  height={23}
                  alt="buttonLogo"
                />
              </Row>
            </Row>
          </Col>
          <Col>
            <Image
              className={styles.weImage}
              src="/images/we1.png"
              width={750}
              height={380}
              alt="buttonLogo"
            />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default Banner;

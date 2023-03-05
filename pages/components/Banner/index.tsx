import React, { useState } from "react";
import Image from "next/image";
import { Modal, Form, Input, Button, Row, Col } from "antd";

import styles from "./index.module.css";

const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        {/* <Image /> */}
        {/* <div className={styles.button}>
          <Row align={"middle"} style={{ paddingLeft: "20px" }}>
            <Col>
              <Image
                src="/images/One-Logo-280x280-1-150x150 1.png"
                width={20}
                height={20}
                alt="buttonLogo"
              />
              <span>IDO ON ARBITRUM</span>
            </Col>
            <Col>
              <Image
                src="/images/Arrow 2.png"
                width={20}
                height={20}
                alt="buttonLogo"
              />
            </Col>
          </Row>
        </div> */}
      </div>
    </>
  );
};

export default Banner;

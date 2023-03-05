import React, { useState } from "react";
import Image from "next/image";
import { Modal, Form, Input, Button, Row, Col } from "antd";

import styles from "./index.module.css";

const Question = () => {
  return (
    <>
      <Row justify="center" align="middle" className={styles.container}>
        <div>
          <Image
            src="/images/question/Frequently Asked Questions.png"
            width={870}
            height={60}
            alt="buttonLogo"
          />
          <Row justify={"space-between"} style={{ marginTop: 100 }} gutter={110}>
            <Col>
              <div>
                <Image
                  src="/images/question/Rectangle 58.png"
                  width={300}
                  height={220}
                  alt="buttonLogo"
                />
              </div>
              <div>
                <Image
                  style={{ margin: "30px 0 10px 0" }}
                  src="/images/question/Have your team had any successful projects before_.png"
                  width={250}
                  height={90}
                  alt="buttonLogo"
                />
              </div>
              <div>
                <Image
                  src="/images/question/Our team has completed several very successful projects before..png"
                  width={246}
                  height={82}
                  alt="buttonLogo"
                />
              </div>
            </Col>
            <Col>
              <div>
                <Image
                  src="/images/question/Rectangle 59.png"
                  width={300}
                  height={220}
                  alt="buttonLogo"
                />
              </div>
              <div>
                <Image
                  style={{ margin: "30px 0 10px 0" }}
                  src="/images/question/How do I participate in the upcoming IDO_.png"
                  width={250}
                  height={90}
                  alt="buttonLogo"
                />
              </div>
              <div>
                <Image
                  src="/images/question/For guaranteed allocation, you need to Buy $CXPAD on Fund your wallet with $USDT to participate in the upcoming IDO..png"
                  width={246}
                  height={120}
                  alt="buttonLogo"
                />
              </div>
            </Col>
            <Col>
              <div>
                <Image
                  src="/images/question/Rectangle 60.png"
                  width={300}
                  height={220}
                  alt="buttonLogo"
                />
              </div>
              <div>
                <Image
                  style={{ margin: "30px 0 10px 0" }}
                  src="/images/question/Which currency do you accept for IDO's_.png"
                  width={250}
                  height={90}
                  alt="buttonLogo"
                />
              </div>
              <div>
                <Image
                  src="/images/question/text.png"
                  width={246}
                  height={180}
                  alt="buttonLogo"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Row>
    </>
  );
};

export default Question;

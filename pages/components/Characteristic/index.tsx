import React, { useState } from "react";
import Image from "next/image";
import { Modal, Form, Input, Button, Row, Col } from "antd";

import styles from "./index.module.css";

const Characteristic = () => {
  return (
    <>
      <div className={styles.characteristic}>
        <div>
          <div>
            <Image
              width={738}
              height={155}
              src={"/images/characteristic/We are very special and different.png"}
              alt="alt"
            ></Image>
          </div>
          <div>
            <Image
              style={{ margin: "16px 0 64px 0" }}
              width={765}
              height={53}
              src={
                "/images/characteristic/We welcome everyone to join our project and work with M to build the most famous music listening software.png"
              }
              alt="alt"
            ></Image>
          </div>
        </div>
        <Row justify={"space-between"}>
          <Col>
            <div>
              <Image
                width={65}
                height={65}
                src={"/images/characteristic/Mask group-2.png"}
                alt="alt"
              ></Image>
            </div>
            <div>
              <Image
                style={{ margin: "32px 0 20px 0" }}
                width={132}
                height={46}
                src={"/images/characteristic/Safety.png"}
                alt="alt"
              ></Image>
            </div>
            <div>
              <Image
                width={393}
                height={82}
                src={
                  "/images/characteristic/Secure by design, private by default, todefend against threats no matter whereyou're working..png"
                }
                alt="alt"
              ></Image>
            </div>
          </Col>
          <Col>
            <div>
              <Image
                width={65}
                height={65}
                src={"/images/characteristic/Mask group-2.png"}
                alt="alt"
              ></Image>
            </div>
            <div>
              <Image
                style={{ margin: "32px 0 20px 0" }}
                width={132}
                height={46}
                src={"/images/characteristic/Safety.png"}
                alt="alt"
              ></Image>
            </div>
            <div>
              <Image
                width={393}
                height={82}
                src={
                  "/images/characteristic/Secure by design, private by default, todefend against threats no matter whereyou're working..png"
                }
                alt="alt"
              ></Image>
            </div>
          </Col>
          <Col>
            <div>
              <Image
                width={65}
                height={65}
                src={"/images/characteristic/Mask group-2.png"}
                alt="alt"
              ></Image>
            </div>
            <div>
              <Image
                style={{ margin: "32px 0 20px 0" }}
                width={132}
                height={46}
                src={"/images/characteristic/Safety.png"}
                alt="alt"
              ></Image>
            </div>
            <div>
              <Image
                width={393}
                height={82}
                src={
                  "/images/characteristic/Secure by design, private by default, todefend against threats no matter whereyou're working..png"
                }
                alt="alt"
              ></Image>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Characteristic;

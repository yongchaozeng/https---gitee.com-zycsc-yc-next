import React, { useState } from "react";
import Image from "next/image";
import { Modal, Form, Input, Button, Row, Col } from "antd";

import styles from "./index.module.css";

const Join = () => {
  return (
    <>
      <Row
        justify="space-around"
        align="middle"
        style={{ height: "100%", margin: "6% 10%" }}
      >
        <Row
          // justify="space-between"
          align="middle"
          style={{
            flexDirection: "column",
          }}
        >
          <div>
            <Image
              width={238}
              height={60}
              src={"/images/join/Join US.png"}
              alt="alt"
            ></Image>
          </div>
          <div style={{ width: "460px", margin: " 32px 0", fontSize: 16 }}>
            asdkashjnd askjdhnajsdna ajshdnja nsmdna skdjna s asdhaisd jalsdjl
            jiahsd ljalsdk asdjaksdjkaskld as asdkashjnd askjdhnajsdna ajshdnja
            nsmdna skdjna s asdhaisd jalsdjl jiahsd ljalsdk asdjaksdjkaskld as
            asdkashjnd askjdhnajsdna ajshdnja nsmdna skdjna s asdhaisd jalsdjl
            jiahsd ljalsdk asdjaksdjkaskld as
            {/* <Image
              width={65}
              height={65}
              src={"/images/join/Mask group-2.png"}
              alt="alt"
            ></Image> */}
          </div>
          <Row
            justify="space-between"
            align="middle"
            style={{ width: "460px", margin: "16px 0" }}
          >
            <Image
              width={65}
              height={65}
              src={"/images/join/discord (1) 1.png"}
              alt="alt"
            ></Image>
            <Image
              width={65}
              height={65}
              src={"/images/join/discord (1) 2.png"}
              alt="alt"
            ></Image>
            <Image
              width={65}
              height={65}
              src={"/images/join/telegram (2) 1.png"}
              alt="alt"
            ></Image>
            <Image
              width={65}
              height={65}
              src={"/images/join/tw.png"}
              alt="alt"
            ></Image>
          </Row>
          <Row justify="space-between" align="middle">
            <Image
              width={250}
              height={76}
              src={"/images/join/applestore 1.png"}
              alt="alt"
              style={{ marginRight: 16 }}
            ></Image>
            <Image
              width={250}
              height={76}
              src={"/images/join/chplay 1.png"}
              alt="alt"
            ></Image>
          </Row>
        </Row>

        <Image
          width={886}
          height={583}
          src={"/images/join/tasdg.png"}
          alt="alt"
        ></Image>
      </Row>
    </>
  );
};

export default Join;

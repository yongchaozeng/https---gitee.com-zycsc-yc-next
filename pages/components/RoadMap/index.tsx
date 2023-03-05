import React, { useState } from "react";
import Image from "next/image";
import { Modal, Form, Input, Button, Row, Col } from "antd";

import styles from "./index.module.css";

const RoadMap = () => {
  return (
    <>
      <Row justify={"center"} className={styles.roadMap}>
        <div>
          {/*  标题 */}
          <Image
            width={300}
            height={60}
            src={"/images/roadMap/RoadMap.png"}
            alt="text"
          ></Image>

          {/* 1-2部分路线图 */}
          <Row justify="center" align="middle">
            <Image
              width={630}
              height={842}
              src={"/images/roadMap/p1.png"}
              alt="text"
            ></Image>
            <div>
              <div>
                <Row align="middle" style={{ margin: "16px 0" }}>
                  <Row
                    justify={"center"}
                    align="middle"
                    className={styles.title}
                  >
                    <Image
                      width={26}
                      height={20}
                      src={"/images/roadMap/01.png"}
                      alt="text"
                    ></Image>
                  </Row>
                  <Image
                    width={313}
                    height={33}
                    src={"/images/roadMap/Stage1 2022.8-10.png"}
                    alt="text"
                  ></Image>
                </Row>
                <Image
                  style={{ paddingLeft: "20px " }}
                  width={279}
                  height={170}
                  src={"/images/roadMap/l1.png"}
                  alt="text"
                ></Image>
              </div>
              <div>
                <Row align="middle" style={{ margin: "16px 0" }}>
                  <Row
                    justify={"center"}
                    align="middle"
                    className={styles.title}
                  >
                    <Image
                      width={26}
                      height={20}
                      src={"/images/roadMap/02.png"}
                      alt="text"
                    ></Image>
                  </Row>
                  <Image
                    width={313}
                    height={33}
                    src={"/images/roadMap/Stage2 2022.10-12.png"}
                    alt="text"
                  ></Image>
                </Row>
                <Image
                  style={{ marginRight: "90px " }}
                  width={364}
                  height={257}
                  src={"/images/roadMap/l2.png"}
                  alt="text"
                ></Image>
              </div>
            </div>
          </Row>
          {/* 3-5部分路线图 */}
          <Row justify="center" align="middle">
            <div>
              <div>
                <Row align="middle" style={{ margin: "16px 0" }}>
                  <Row
                    justify={"center"}
                    align="middle"
                    className={styles.title}
                  >
                    <Image
                      width={26}
                      height={20}
                      src={"/images/roadMap/03.png"}
                      alt="text"
                    ></Image>
                  </Row>
                  <Image
                    width={313}
                    height={33}
                    src={"/images/roadMap/Stage3 2023.1-2.png"}
                    alt="text"
                  ></Image>
                </Row>
                <Image
                  style={{ marginLeft: "-25px " }}
                  width={230}
                  height={112}
                  src={"/images/roadMap/txt1.png"}
                  alt="text"
                ></Image>
              </div>
              <div>
                <Row align="middle" style={{ margin: "16px 0" }}>
                  <Row
                    justify={"center"}
                    align="middle"
                    className={styles.title}
                  >
                    <Image
                      width={26}
                      height={20}
                      src={"/images/roadMap/04.png"}
                      alt="text"
                    ></Image>
                  </Row>
                  <Image
                    width={313}
                    height={33}
                    src={"/images/roadMap/Stage4 2022.2-3.png"}
                    alt="text"
                  ></Image>
                </Row>
                <Image
                  style={{ marginLeft: "75px" }}
                  width={400}
                  height={200}
                  src={"/images/roadMap/dex.png"}
                  alt="text"
                ></Image>
              </div>
              <div>
                <Row align="middle" style={{ margin: "16px 0" }}>
                  <Row
                    justify={"center"}
                    align="middle"
                    className={styles.title}
                  >
                    <Image
                      width={26}
                      height={20}
                      src={"/images/roadMap/05.png"}
                      alt="text"
                    ></Image>
                  </Row>
                  <Image
                    width={313}
                    height={33}
                    src={"/images/roadMap/Stage5 2022.2-3.png"}
                    alt="text"
                  ></Image>
                </Row>
                <Image
                  style={{ marginRight: "0px " }}
                  width={335}
                  height={83}
                  src={"/images/roadMap/uux.png"}
                  alt="text"
                ></Image>
              </div>
              <Row
                align={"middle"}
                justify="center"
                className={styles.starButton}
              >
                <Image
                  width={178}
                  height={27}
                  src={"/images/roadMap/Get started.png"}
                  alt="text"
                ></Image>
              </Row>
            </div>
            <Image
              width={693}
              height={927}
              src={"/images/roadMap/pp25 1.png"}
              alt="text"
            ></Image>
          </Row>
        </div>
      </Row>
    </>
  );
};

export default RoadMap;

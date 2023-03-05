import React, { useState } from "react";
import Image from "next/image";
import { Modal, Form, Input, Button, Row, Col } from "antd";

import styles from "./index.module.css";

const Footer = () => {
  return (
    <>
      <Row justify="space-around" className={styles.container}>
        <Col>
          <Row justify="space-around" align="middle">
            <Image
              src="/images/footer/Group 1 1.png"
              width={100}
              height={100}
              alt="buttonLogo"
            />
            <Image
              src="/images/footer/Armusic..png"
              width={160}
              height={30}
              alt="buttonLogo"
            />
          </Row>
          <div style={{ marginLeft: "15px" }}>
            <Image
              src="/images/footer/Navigation.png"
              width={125}
              height={23}
              style={{ margin: "10px 0" }}
              alt="buttonLogo"
            />
            <br />
            <Image
              src="/images/footer/Home.png"
              width={63}
              height={18}
              style={{ margin: "10px 0" }}
              alt="buttonLogo"
            />
            <br />
            <Image
              src="/images/footer/Partner.png"
              width={80}
              height={18}
              alt="buttonLogo"
              style={{ margin: "10px 0" }}
            />
            <br />
            <Image
              src="/images/footer/About.png"
              width={63}
              height={18}
              alt="buttonLogo"
              style={{ margin: "10px 0" }}
            />
            <br />
            <Image
              src="/images/footer/Trait.png"
              width={52}
              height={18}
              alt="buttonLogo"
              style={{ margin: "10px 0" }}
            />
            <br />
            <Image
              src="/images/footer/Roadmap.png"
              width={100}
              height={18}
              alt="buttonLogo"
              style={{ margin: "10px 0" }}
            />
            <br />
            <Image
              src="/images/footer/Question.png"
              width={96}
              height={18}
              alt="buttonLogo"
              style={{ margin: "10px 0" }}
            />
            <br />
            <Image
              src="/images/footer/Contact.png"
              width={84}
              height={18}
              alt="buttonLogo"
              style={{ margin: "10px 0" }}
            />
            <br />
          </div>
        </Col>
        <Col style={{ marginTop: "30px" }}>
          <Image
            src="/images/footer/CoinxPad is where you get access to the best new tokens before they list CoinxPad on other centralized or decentralized exchanges..png"
            width={632}
            height={34}
            style={{ margin: "10px 0" }}
            alt="buttonLogo"
          />
          <br />
          <Image
            src="/images/footer/Help.png"
            width={52}
            height={23}
            alt="buttonLogo"
            style={{ margin: "10px 0" }}
          />{" "}
          <br />
          <Image
            src="/images/footer/What is Mnoize.png"
            width={164}
            height={18}
            alt="buttonLogo"
            style={{ margin: "10px 0" }}
          />{" "}
          <br />
          <Image
            src="/images/footer/How to join us.png"
            width={154}
            height={18}
            alt="buttonLogo"
            style={{ margin: "10px 0" }}
          />{" "}
          <br />
          <Image
            src="/images/footer/Common problem.png"
            width={188}
            height={18}
            alt="buttonLogo"
            style={{ margin: "10px 0" }}
          />{" "}
          <br />
          <Image
            src="/images/footer/Contact us.png"
            width={114}
            height={18}
            alt="buttonLogo"
            style={{ margin: "10px 0" }}
          />
          <br />
        </Col>
        <Col style={{ marginTop: "30px" }}>
          <Row
            justify="space-around"
            align="middle"
            style={{ marginBottom: "30px" }}
          >
            <Image
              src="/images/footer/telegram 3.png"
              width={60}
              height={60}
              alt="buttonLogo"
            />

            <Image
              src="/images/footer/discord 1.png"
              width={60}
              height={60}
              alt="buttonLogo"
            />

            <Image
              src="/images/footer/推特 2.png"
              width={60}
              height={60}
              alt="buttonLogo"
            />
          </Row>
          <Row
            justify="space-around"
            align="middle"
            style={{ marginBottom: "46px" }}
          >
            <Image
              src="/images/footer/Instagram 1.png"
              width={60}
              height={60}
              alt="buttonLogo"
            />
            <Image
              src="/images/footer/facebook_facebook52 2.png"
              width={60}
              height={60}
              alt="buttonLogo"
            />
            <Image
              src="/images/footer/youtube (2) 1.png"
              width={60}
              height={60}
              alt="buttonLogo"
            />
          </Row>

          <div style={{ marginBottom: "34px" }}>
            <Image
              src="/images/footer/chplay 1.png"
              width={280}
              height={85}
              alt="buttonLogo"
            />
          </div>
          <div>
            <Image
              src="/images/footer/applestore 1.png"
              width={280}
              height={85}
              alt="buttonLogo"
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Footer;

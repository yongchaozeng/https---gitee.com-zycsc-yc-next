import React, { useState } from "react";
import Image from "next/image";
import { Modal, Form, Input, Button, Row } from "antd";

import styles from "./index.module.css";
// import logo from "../../images/About.png";
// import { useNavigate } from "react-router-dom";
const Header = () => {
  //   const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollTo = (stringId: any) => {
    const top = document.querySelector(stringId)?.getBoundingClientRect()?.top;
    console.log(top);

    window.scrollTo({
      left: 0,
      top: top + document.documentElement.scrollTop,
      behavior: "smooth",
    });
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className={styles.header}>
        <Row align="middle">
          <Image
            width={40}
            height={40}
            src="/images/logo.png"
            alt="Logo"
            priority
          />
          <Image
            width={100}
            height={16}
            src="/images/Armusic..png"
            alt="Logo"
            priority
          />
        </Row>

        <a
          className={styles.liLink}
          // onClick={() => {
          //   scrollTo("#t1");
          // }}
        >
          Home
        </a>
        <a
          className={styles.liLink}
          onClick={() => {
            scrollTo("#t2");
          }}
        >
          Partner
        </a>
        <a
          className={styles.liLink}
          onClick={() => {
            scrollTo("#t3");
          }}
        >
          About
        </a>
        <a
          className={styles.liLink}
          onClick={() => {
            scrollTo("#t4");
          }}
        >
          Trait
        </a>
        <a
          onClick={() => {
            scrollTo("#t5");
          }}
          className={styles.liLink}
        >
          Roadmap
        </a>
        <a
          onClick={() => {
            scrollTo("#t6");
          }}
          className={styles.liLink}
        >
          Question
        </a>
        <a
          onClick={() => {
            scrollTo("#t7");
          }}
          className={styles.liLink}
        >
          Contact
        </a>
        <a
          onClick={() => {
            scrollTo("#t8");
          }}
          className={styles.liLink}
        >
          White paper
        </a>
        {/* <a
          target='_black'
          href='https://magiclegends.gitbook.io/magic-legend/roadmap'
          className={styles.liLink}>
          钱包链接
        </a> */}
        <div>
          <Button style={{ marginRight: "16px" }}>Download</Button>
          <Button>Connect Wallet</Button>
        </div>
      </div>
      <Modal
        title="注册/登录"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="address"
            name="address"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Header;

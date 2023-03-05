import React from "react";
import c from "next/head";

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Image from "next/image";

import { theme } from "antd";
import Header from "./components/Header";
import Banner from "./components/Banner";
import We from "./components/We";
import Video from "./components/Video";
import Characteristic from "./components/Characteristic";
import Join from "./components/Join";
import RoadMap from "./components/RoadMap";
import Question from "./components/Question";
import Cooperate from "./components/Cooperate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Header />
      <Banner />
      <We />
      <Video />
      <Characteristic />
      <Join />
      <RoadMap />
      <Question />
      <Cooperate />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

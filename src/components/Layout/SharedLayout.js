import React from "react";

import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Dashboard from "../../screen/Dashboard/Dashboard";

import "./sharedLayout.scss";

const SharedLayout = () => {
  return (
    <>
      {/* <Header />
      <SideBar /> */}
      <Dashboard/>
    </>
  );
};

export default SharedLayout;

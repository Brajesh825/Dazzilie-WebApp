import React from "react";

import Logo from "../../icons/logo.svg";
import Dazzie from "../../icons/dazzie.svg";
import { ReactComponent as Notification } from "../../icons/NotificationBell.svg";
import { ReactComponent as ProfilePic } from "../../icons/user.svg";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={Logo} alt="Logo" />
        <img src={Dazzie} alt="company name" />
      </div>
      <div className="header__right">
        <Notification fill=" #9A9AB0" />
        <ProfilePic fill=" #9A9AB0" />
        <div className="user">
          <h3>Sumanta</h3>
          <p>Cashier</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

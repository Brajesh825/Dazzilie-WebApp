import React from "react";
import "./sidebar.scss";

import { ReactComponent as Menu } from "../../icons/Menu.svg";
import { ReactComponent as Order } from "../../icons/orders.svg";
import { ReactComponent as Customer } from "../../icons/customer.svg";
import { ReactComponent as Package } from "../../icons/Package.svg";
import { ReactComponent as Discount } from "../../icons/discount.svg";
import { ReactComponent as User } from "../../icons/user.svg";
import { ReactComponent as Settings } from "../../icons/settings.svg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ul>
          <li className="active">
            <Menu  fill=" #9A9AB0" />
          </li>
          <li >
            <Order fill=" #9A9AB0" />
          </li>
          <li  >
            <Customer fill=" #9A9AB0" />
          </li>
          <li >
            <Package fill=" #9A9AB0" />
          </li>
          <li >
            <Discount fill=" #9A9AB0" />
          </li>
          <li >
            <User fill=" #9A9AB0" />
          </li>
        </ul>
      </div>
      <div className="sidebar__bottom">
        <ul>
          <li >
            <Settings fill=" #9A9AB0" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

import React from "react";
import "./sidebar.scss";

import { ReactComponent as Menu } from "../../icons/Menu.svg";
import { ReactComponent as Order } from "../../icons/orders.svg";
import { ReactComponent as Customer } from "../../icons/customer.svg";
import { ReactComponent as Package } from "../../icons/Package.svg";
import { ReactComponent as Discount } from "../../icons/discount.svg";
import { ReactComponent as User } from "../../icons/user.svg";
import { ReactComponent as Settings } from "../../icons/settings.svg";

import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ul>
          <NavLink to={"/"} activeClassName="selected">
            <Menu fill=" #9A9AB0" />
          </NavLink>
          <NavLink to={"/analytics"} activeClassName="selected">
            <Order fill=" #9A9AB0" />
          </NavLink>
          <NavLink to={"/x"} activeClassName="selected">
            <Customer fill=" #9A9AB0" />
          </NavLink>
          <NavLink to={"/y"} activeClassName="selected">
            <Package fill=" #9A9AB0" />
          </NavLink>
          <NavLink to={"/z"} activeClassName="selected">
            <Discount fill=" #9A9AB0" />
          </NavLink>
          <NavLink to={"/a"} activeClassName="selected">
            <User fill=" #9A9AB0" />
          </NavLink>
        </ul>
      </div>
      <div className="sidebar__bottom">
        <ul>
          <NavLink to={"/b"} activeClassName="selected">
            <Settings fill=" #9A9AB0" />
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

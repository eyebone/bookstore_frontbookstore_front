import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { Avatar, Dropdown, Menu } from "antd";
import "../css/index.css";
import * as userService from "../services/userService";
import config from "config";

export class UserAvatar extends React.Component {
  render() {
    const { user } = this.props;
    console.log(user);
    if (user.userType === 1) {
      console.log(1);
      const menu = (
        <Menu>
          <Menu.Item>
            <a rel="noopener noreferrer" href="/manager">
              go to manager mode
            </a>
          </Menu.Item>
          <Menu.Item>
            <Link
              to={{
                pathname: "/manageBookView",
              }}
            >
              goto manage Book View
            </Link>
            {/* <a href="/manageBookView" >
              goto manage Book View
            </a> */}
          </Menu.Item>
          <Menu.Item>
            <a href="#" onClick={userService.logout}>
              Log Out
            </a>
          </Menu.Item>
        </Menu>
      );
      // const imgUrl = config.imgUrl + "/" + user.username + ".jpg";
      const imgUrl = "../assets/dog.svg";

      return (
        <div id="avatar">
          <span className="name">Hi, {user.username}</span>
          <Dropdown overlay={menu} placement="bottomRight">
            <img className="logo" src="../assets/bg.jpg" />
          </Dropdown>
        </div>
      );
    } else {
      console.log(2);
      const menu = (
        <Menu>
          <Menu.Item>
            <a rel="noopener noreferrer" href="/profile">
              Show Profile
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#" onClick={userService.logout}>
              Log Out
            </a>
          </Menu.Item>
        </Menu>
      );
      return (
        <div id="avatar">
          <span className="name">Hi, {user.username}</span>
          <Dropdown overlay={menu} placement="bottomRight">
            <img className="logo" src="../assets/bg.jpg" />
          </Dropdown>
        </div>
      );
    }
  }
}

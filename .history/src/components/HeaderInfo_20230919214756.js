import React from 'react';
import {Row, Col, Button,message} from 'antd';
import '../css/index.css'
import logo from '../assets/dog.svg';
import logoFont from '../assets/logo-name.svg';
import { history } from "../utils/history";

const user = JSON.parse(localStorage.getItem("userinfo"));

const username = user.username;

const url = `http://localhost:8080/logout?username=${username}`;

const handleLogout = async (username) => {
    console.log("user",user);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // body:JSON.stringify(newUserObject)
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Data received from backend:", data);
        // const result = data.text();
        if (data == "logout success") {
          history.push("/");
          message.success("logout success")
        } else {
            console.log(data);
          message.error("logout failed!");
        }
      })
      .catch(function (ex) {
        console.log("parsing failed", ex);
      });
};

const HeaderInfo = () => (
    <div id="header">
        <div id="header-content">
            <Row>
                <Col xs={24} sm={24} md={5} lg={5} xl={5} xxl={4}>
                    <a id="logo" href={""}>
                        <img alt="logo"  className="logo" src={logo} style={{ height:45 }}/>
                        <img alt="Book Store"  className="logo-font" src={logoFont} style={{ height:40 }}/>
                    </a>
                </Col>
                <Col xs={0} sm={0} md={19} lg={19} xl={19} xxl={20} push={19}>
                    {/* {user == null ? "Hello World" : "hello, user ${user}"} */}
                    <Button danger type="default" 
                    onClick={handleLogout}
                    // href='/'
                    >log out</Button>
                </Col>
            </Row>
        </div>
    </div>
);

export default HeaderInfo;
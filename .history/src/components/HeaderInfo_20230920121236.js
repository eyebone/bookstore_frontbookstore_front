import React ,{useState}from 'react';
import {Row, Col, Button,message} from 'antd';
import '../css/index.css'
import logo from '../assets/dog.svg';
import logoFont from '../assets/logo-name.svg';
import { history } from "../utils/history";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginTimeDrawer from './LoginTimeDrawer';
// import { useHistory } from 'react-router-dom';


import LoginView from '../view/LoginView';
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
  
//   getItem("Login View", "/", <LoginView />),
// ];


const HeaderInfo = () => {
  const user = JSON.parse(localStorage.getItem("userinfo"));

  const username = user.username;

  const navigate = useNavigate();

  const url = `http://localhost:8080/logout?username=${username}`;

  const handleLogout = async (username) => {
    console.log("user", user);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // body:JSON.stringify(newUserObject)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data received from backend:", data);
        const receivedMessage = data.message;
        console.log(receivedMessage);
        const minutes = receivedMessage.minutes;
        const seconds = receivedMessage.seconds;
        if (receivedMessage === "logout success") {
          setTimeout(() => {
            navigate('/')
            message.success("logout success");
          }, 300); // 延迟 300 毫秒后执行导航逻辑
        } else {
          //     console.log("data",data);
          message.error("logout failed!");
        }
      })
      .catch(function (ex) {
        console.log("parsing failed", ex);
      });
  };
  // const history = useHistory();

  return (
    <div id="header">
      <div id="header-content">
        <Row>
          <Col xs={24} sm={24} md={5} lg={5} xl={5} xxl={4}>
            <a id="logo" href={""}>
              <img
                alt="logo"
                className="logo"
                src={logo}
                style={{ height: 45 }}
              />
              <img
                alt="Book Store"
                className="logo-font"
                src={logoFont}
                style={{ height: 40 }}
              />
            </a>
          </Col>
          <Col xs={0} sm={0} md={19} lg={19} xl={19} xxl={20} push={19}>
            {/* <Link to="/"> */}
            <Button danger type="default" onClick={handleLogout}>
              log out
            </Button>
            {/* </Link> */}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeaderInfo;
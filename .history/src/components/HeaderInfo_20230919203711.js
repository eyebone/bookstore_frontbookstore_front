import React from 'react';
import {Row, Col, Button} from 'antd';
import '../css/index.css'
import logo from '../assets/dog.svg';
import logoFont from '../assets/logo-name.svg';

const user = JSON.parse(localStorage.getItem("user"));

const HeaderInfo = () => (

const url = `http://localhost:8080/adduser?username=${username}&password=${password}&email=${email}`;

return(

)
  
);

export default HeaderInfo;
import {NavLink, useNavigate} from "react-router-dom";
import { BookTwoTone, ShoppingTwoTone, UserAddOutlined, SettingTwoTone, HeartOutlined, ShoppingCartOutlined, BookOutlined } from '@ant-design/icons';
import { Breadcrumb,  theme } from 'antd';
import { useState } from 'react';
import { Menu, Layout, Icon } from "antd";
const { Header, Content, Footer, Sider } = Layout;


function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}


const items = [
  getItem("Home", "/Home/Book", <BookOutlined />),
  getItem("My  Cart", "/Home/Shopping", <ShoppingCartOutlined />),

  getItem("My Orders", "/Home/Orders", <HeartOutlined />),
  getItem("My Profile", "/Home/Profile", <UserAddOutlined />),
  getItem('My Statistics', '/Home/Statistics', <UserAddOutlined />),
];


const SideBar = () =>
{

    const navigate = useNavigate();
    const onClick = (e) => {
        navigate(e.key, {replace: true})
    };

    return(
        <Menu onClick={onClick} style={{width: 256}} mode="vertical" items={items}/>
    );

}

export default SideBar;


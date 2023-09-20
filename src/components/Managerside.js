import {NavLink, useNavigate} from "react-router-dom";
// import { BookTwoTone, ShoppingTwoTone, TabletTwoTone, SettingTwoTone } from '@ant-design/icons';.
import {
  BookTwoTone,
  ShoppingTwoTone,
  UserAddOutlined,
  SettingTwoTone,
  HeartOutlined,
  ShoppingCartOutlined,
  BookOutlined,
} from "@ant-design/icons";

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Book } from "./Book";
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
    getItem('书籍信息管理', '/Manager/Book', <BookOutlined />),
    // getItem('Add Book', '/Manager/AddBook', <BookOutlined />),
    getItem('订单管理', '/Manager/Order', <ShoppingCartOutlined />),
    getItem('用户管理', '/Manager/User', <UserAddOutlined />),
    // getItem('Order Statistics', '/Manager/OrderStatistics', <ShoppingCartOutlined />),
    // getItem('Book Statistics', '/Manager/BookStatistics', <ShoppingCartOutlined />),
];


const MSideBar = () =>
{

    const navigate = useNavigate();
    const onClick = (e) => {
        navigate(e.key, {replace: true})
    };

    return(
        <Menu onClick={onClick} style={{width: 256}} mode="vertical" items={items}/>
    );

}

export default MSideBar;
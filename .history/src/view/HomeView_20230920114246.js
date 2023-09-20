import React from 'react';
import { useNavigate, Routes, Route ,Outlet} from 'react-router-dom'
import { Layout, theme } from 'antd';
import HeaderInfo from "../components/HeaderInfo";
import SideBar from "../components/SideBar";
import '../css/home.css'
import withRouter from "../withRouter";
import {storage} from "../utils/localStorage";
import LoginTimeDrawer from '../components/LoginTimeDrawer';
// import '../c'
// import { Outlet } from 'react-router-dom';
const { Header, Content, Sider, Footer } = Layout;


const Home  = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

        return (
          <div>
            <Layout className="layout">
              <Header>
                <HeaderInfo />
              </Header>
              <Layout>
                <Sider
                  width={200}
                  style={{
                    background: colorBgContainer,
                    position: "absolute",
                    top: "10%",
                    left: "5%",
                  }}
                >
                  <SideBar />
                  <LoginTimeDrawer />
                </Sider>
                <Content
                  style={{
                    padding: "40px 50px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div className="home-content">
                    <Outlet />
                  </div>
                </Content>
              </Layout>
              <Footer style={{ textAlign: "center" }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
          </div>
        );

};

export default withRouter(Home);
import React from 'react';
import { useNavigate, Routes, Route ,Outlet} from 'react-router-dom'
import { Layout, theme } from 'antd';
import HeaderInfo from "../components/HeaderInfo";
import MSideBar from "../components/Managerside";
import '../css/home.css'
import withRouter from "../withRouter";
const { Header, Content, Sider, Footer } = Layout;


const Manager  = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();


        return (
          <div
            style={{
            //   backgroundImage: "../assets/discoElysium.jpg",
            backgroundColor:"#faf2de"
            }}
          >
            <Layout className="layout">
              <Header>
                <HeaderInfo />
              </Header>
              <Layout>
                <Sider
                  width={200}
                  style={{
                    background: colorBgContainer,
                  }}
                >
                  <MSideBar />
                </Sider>
                <Content style={{ padding: "0 50px" }}>
                  <div className="home-content">
                    <Outlet />
                  </div>
                </Content>
              </Layout>
              {/* <Footer style={{ textAlign: "center" }}>
                Ant Design ©2018 Created by Ant UED
              </Footer> */}
            </Layout>
          </div>
        );

};

export default withRouter(Manager);
import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Menu, Icon, Input, Avatar } from "antd";
import "./style.less";
import headImg from "@/utils/img/header.png";

const { Search } = Input;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default
@connect((state) => {
  return {
    user: state.auth.user,
  };
})
class Home extends Component {
  render() {
    return (
      <div className="home">
        <Layout>
          <Header className="header">
            <div className="logo">
              <img src={headImg} alt="" />
            </div>
            <div className="header-content">
              <p>
                <Search placeholder="input search text" />
              </p>
              <p>
                <Icon type="eye" />
                <Icon type="mail" />
                <Icon type="sound" />
                <Avatar
                  style={{
                    backgroundColor: "#87d068",
                  }}
                  icon="user"
                />
                <b>{this.props.user}</b>
                <Icon type="export" />
              </p>
            </div>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      subnav 1
                    </span>
                  }
                >
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="laptop" />
                      subnav 2
                    </span>
                  }
                >
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="notification" />
                      subnav 3
                    </span>
                  }
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: "20px" }}>
              <Content
                style={{
                  background: "#fff",
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                Content
              </Content>
            </Layout>
          </Layout>
        </Layout>
        ,
      </div>
    );
  }
}

import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "@/actions/auth";
import { getSearch } from "@/actions/search";
import { Layout, Menu, Icon, Input, Avatar, Progress } from "antd";
import headImg from "@/utils/img/header.png";
import { Link } from "react-router-dom";
import { get } from "@/utils/request";
import api from "@/services/api";
import "./style.less";

const { Search } = Input;
const { Header, Content, Sider } = Layout;

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1776886_p7fq40292oi.js", // 在 iconfont.cn 上生成
});

export default
@connect(
  (state) => {
    return {
      user: state.auth.user,
    };
  },
  {
    getUser,
    getSearch,
  }
)
class Home extends Component {
  //  退出登录
  export = () => {
    this.props.getUser("");
    this.props.history.push("/login");
  };
  //  点击搜索
  searchFn = (value) => {
    get(api.searchUrl + "?keyword=" + value).then((res) => {
      if (res.status === "200") {
        res.users.forEach((element) => {
          element.key = element.id;
        });
      }
      this.props.getSearch(res.users);
    });
  };
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
                <Search
                  placeholder="input search text"
                  onSearch={(value) => this.searchFn(value)}
                />
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
                <Icon type="export" onClick={this.export} />
              </p>
            </div>
          </Header>
          <Layout>
            <Sider className="home-sider">
              <Menu
                mode="inline"
                defaultSelectedKeys={["6"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <Menu.Item key="1">
                  <span>Dashboard</span>
                  <MyIcon type="iconshouye" />
                </Menu.Item>
                <Menu.Item key="2">
                  <span>Basic UI Element</span>
                  <MyIcon type="iconfenxiang" />
                </Menu.Item>
                <Menu.Item key="3">
                  <span>Icons</span>
                  <MyIcon type="iconcafe" />
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/myform">
                    <span>Form Elements</span>
                  </Link>
                  <MyIcon type="iconyoujian" />
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to="/echart">
                    <span>Chart</span>
                  </Link>
                  <MyIcon type="iconbicycle" />
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to="/table">
                    <span>Table</span>
                  </Link>
                  <MyIcon type="iconios" />
                </Menu.Item>
                <Menu.Item key="7">
                  <Link to="/sample">
                    <span>Sample Pages</span>
                  </Link>
                  <MyIcon type="iconhotel" />
                </Menu.Item>
                <div className="sider-bottom">
                  <p>Total Sales</p>
                  <Progress
                    strokeColor={{
                      "0%": "#87cc8b",
                      "100%": "#eed457",
                    }}
                    percent={70}
                    showInfo={false}
                  />
                  <span>50 Items sold</span>
                  <p>Customer Target</p>
                  <Progress
                    strokeColor={{
                      "0%": "#5130f4",
                      "100%": "#a450df",
                    }}
                    percent={90}
                    showInfo={false}
                  />
                  <span>200 Items sold</span>
                </div>
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
                {this.props.children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
        ,
      </div>
    );
  }
}

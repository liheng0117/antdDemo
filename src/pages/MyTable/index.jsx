import React, { Component } from "react";
import { Table, Divider, Progress, Avatar, message } from "antd";
import { connect } from "react-redux";
import { get, post } from "@/utils/request";
import api from "@/services/api";

export default
@connect((state) => {
  return {
    user: state.auth.user,
  };
})
class MyTable extends Component {
  state = {
    userData: [],
  };
  //  路由守卫
  constructor(props) {
    super(props);
    if (!this.props.user) {
      message.info("请先登录");
      this.props.history.push("/login");
    }
  }
  componentDidMount() {
    get(api.listUrl).then((res) => {
      let newData = [];
      res.users.forEach((element) => {
        element.key = element.id;
        newData.push(element);
      });
      this.setState({
        userData: newData,
      });
    });
  }
  columns = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (url) => {
        return <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />;
      },
    },
    {
      title: "First name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "msg",
      key: "msg",
      render: (msg) => {
        return (
          <Progress
            percent={Number(msg)}
            size="small"
            showInfo={false}
            style={{ width: "100px" }}
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
          />
        );
      },
    },
    {
      title: "Price",
      dataIndex: "hospital",
      key: "hospital",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        return (
          <span>
            <a href=" ">Edit</a>
            <Divider type="vertical" />
            <a href=" " onClick={() => this.delFn(text.id)}>
              Delete
            </a>
          </span>
        );
      },
    },
  ];
  delFn = (id) => {
    let obj = {};
    obj.id = id;
    post(api.delUrl, obj).then((res) => {
      message.info(res.info);
    });
  };

  render() {
    const { userData } = this.state;
    return (
      <div>
        <Table
          columns={this.columns}
          dataSource={userData}
          pagination={{ pageSize: 5 }}
        />
      </div>
    );
  }
}

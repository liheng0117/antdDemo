import React, { Component } from "react";
import { message } from "antd";
import { connect } from "react-redux";

export default
@connect((state) => {
  return {
    user: state.auth.user,
  };
})
class Echart extends Component {
  //  路由守卫
  constructor(props) {
    super(props);
    if (!this.props.user) {
      message.info("请先登录");
      this.props.history.push("/login");
    }
  }
  render() {
    return <div>Echart</div>;
  }
}

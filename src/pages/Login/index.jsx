import React, { Component } from "react";
import { Form, Input, Button, message } from "antd";
import { connect } from "react-redux";
import { post } from "@/utils/request";
import api from "@/services/api";
import { getUser } from "@/actions/auth";
import bgimg from "../../utils/img/bg.png";
import "./style.less";

export default
@Form.create({
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        value: "",
      }),
    };
  },
})
@connect(
  (state) => {
    return {};
  },
  {
    getUser,
  }
)
class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        post(api.loginUrl, values).then((res) => {
          message.info(res.message);
          if (res.status === "200") {
            this.props.getUser(res.data.user_name);
            this.props.history.push("/");
          }
        });
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login" style={{ backgroundImage: `url(${bgimg})` }}>
        <div className="login-sec">
          <p>SIGN IN</p>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" },
                ],
              })(<Input placeholder="USERNAME" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("pwd", {
                rules: [
                  { required: true, message: "Please input your Password!" },
                ],
              })(<Input type="password" placeholder="PASSWORD" />)}
            </Form.Item>
            <Form.Item>
              Not register？ <a href="/reg">Sign Up</a>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: "#67c9cb", border: "none" }}
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

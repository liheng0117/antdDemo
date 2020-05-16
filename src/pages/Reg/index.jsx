import React, { Component } from "react";
import { Form, Input, Button, message } from "antd";
import { post } from "@/utils/request";
import api from "@/services/api";
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
class Reg extends Component {
  state = {
    confirmDirty: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        let obj = {};
        obj.username = values.username;
        obj.pwd = values.password;
        post(api.regUrl, obj).then((res) => {
          message.info(res.info);
          if (res.status === "200") {
            this.props.history.push("/login");
          }
        });
      }
    });
  };
  handleConfirmBlur = (e) => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };
  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords is inconsistent!");
    } else {
      callback();
    }
  };
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="reg" style={{ backgroundImage: `url(${bgimg})` }}>
        <div className="reg-sec">
          <p>SIGN UP</p>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" },
                ],
              })(<Input placeholder="NAME" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" },
                ],
              })(<Input type="password" placeholder="PASSWORD" />)}
            </Form.Item>
            <Form.Item>
              <Form.Item>
                {getFieldDecorator("confirm", {
                  rules: [
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    {
                      validator: this.compareToFirstPassword,
                    },
                  ],
                })(
                  <Input
                    type="password"
                    onBlur={this.handleConfirmBlur}
                    placeholder="RE TYPE PASSWORD"
                  />
                )}
              </Form.Item>
              Already registered? <a href="/login">Sign In</a>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: "#67c9cb", border: "none" }}
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

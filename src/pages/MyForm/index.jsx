import React, { Component } from "react";
import { Form, Input, Button, Upload, message, Icon } from "antd";
import { post } from "@/utils/request";
import { getData } from "@/actions/home";
import api from "@/services/api";
import { connect } from "react-redux";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
export default
@connect(
  (state) => {
    return {
      user: state.auth.user,
      data: state.home.data,
    };
  },
  {
    getData,
  }
)
@Form.create({
  mapPropsToFields(props) {
    return {
      name: Form.createFormField({
        value: props.data.name,
      }),
      msg: Form.createFormField({
        value: props.data.msg,
      }),
      hospital: Form.createFormField({
        value: props.data.hospital,
      }),
    };
  },
})
class MyForm extends Component {
  //  路由守卫
  constructor(props) {
    super(props);
    if (!this.props.user) {
      message.info("请先登录");
      this.props.history.push("/login");
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (this.props.data) {
          post(api.updateUrl, this.props.data).then((res) => {
            message.info(res.message);
            if (res.status === "200") {
              this.props.getData("");
              this.props.history.push("/table");
            }
          });
        } else {
          values.gender = post(api.addUrl, values).then((res) => {
            message.info(res.info);
            if (res.status === "200") {
              this.props.history.push("/table");
            }
          });
        }
      }
    });
  };
  // 清空表单
  handleResetClick = (e) => {
    this.props.form.resetFields();
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h2>Basic Form</h2>
        <Form wrapperCol={{ span: 24 }} onSubmit={this.handleSubmit}>
          <Form.Item label="Name">
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Please input your name!" }],
            })(<Input placeholder="name" />)}
          </Form.Item>
          <Form.Item label="Age">
            {getFieldDecorator("msg", {
              rules: [{ required: true, message: "Please input your age!" }],
            })(<Input placeholder="name" />)}
          </Form.Item>
          <Form.Item label="Price">
            {getFieldDecorator("hospital", {
              rules: [{ required: true, message: "Please input your price!" }],
            })(<Input placeholder="name" />)}
          </Form.Item>
          <Form.Item label="File update Image">
            <Upload {...props}>
              <Button>
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
          </Form.Item>
          ,
          <Form.Item wrapperCol={{ span: 12 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              style={{ margin: "0 15px" }}
              onClick={this.handleResetClick}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

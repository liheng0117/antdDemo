import React, { Component } from "react";
import { Pagination } from "antd";
import { post } from "@/utils/request";
import api from "@/services/api";
import "./style.less";

export default class Sample extends Component {
  state = {
    data: [],
    count: 1,
  };
  pageFn = (current) => {
    let obj = { page: current };
    post(api.pageUrl, obj).then((res) => {
      this.setState({
        data: res.result.list,
        count: current,
      });
    });
  };
  componentDidMount() {
    let obj = { page: this.state.count };
    post(api.pageUrl, obj).then((res) => {
      console.log(res);
      this.setState({
        data: res.result.list,
      });
    });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="sample">
        {data.map((v) => {
          return (
            <div key={v.id} className="content">
              <p>{v.title}</p>
            </div>
          );
        })}
        <Pagination
          defaultCurrent={this.state.count}
          total={500}
          onChange={this.pageFn}
        />
      </div>
    );
  }
}

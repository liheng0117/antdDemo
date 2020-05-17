import React, { Component } from "react";
import { message } from "antd";
import { connect } from "react-redux";
import echarts from "echarts";
import "./style.less";

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
    return (
      <div className="echart">
        <div ref="main" style={{ width: "50%", height: "50%" }}></div>
        <div ref="main1" style={{ width: "50%", height: "50%" }}></div>
        <div ref="main2" style={{ width: "50%", height: "50%" }}></div>
        <div ref="main3" style={{ width: "50%", height: "auto" }}></div>
      </div>
    );
  }
  componentDidMount() {
    let myChart = echarts.init(this.refs.main);
    let myChart1 = echarts.init(this.refs.main1);
    let myChart2 = echarts.init(this.refs.main2);
    let myChart3 = echarts.init(this.refs.main3);

    window.addEventListener("resize", () => {
      myChart.resize();
      myChart1.resize();
      myChart2.resize();
      myChart3.resize();
    });

    let option = {
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["2013", "2014", "2015", "2016", "2017"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 1301, 1134, 890],
          type: "line",
          areaStyle: {},
        },
      ],
    };

    let option1 = {
      xAxis: {
        type: "category",
        data: ["2013", "2014", "2015", "2016", "2017"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(220, 220, 220, 0.8)",
          },
        },
      ],
    };

    let option2 = {
      xAxis: {
        type: "category",
        data: ["2013", "2014", "2015", "2016", "2017"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [520, 1132, 901, 434, 1290],
          type: "line",
          smooth: true,
        },
      ],
    };

    let option3 = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        top: 0,
        data: ["PINK", "BLUE", "YELLOW"],
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: false,
              fontSize: "30",
              fontWeight: "bold",
            },
          },

          data: [
            { value: 234, name: "PINK" },
            { value: 135, name: "BLUE" },
            { value: 158, name: "YELLOW" },
          ],
        },
      ],
    };

    myChart.setOption(option);
    myChart1.setOption(option1);
    myChart2.setOption(option2);
    myChart3.setOption(option3);
  }
}

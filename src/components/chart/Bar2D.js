import "./bar2D.scss";
import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.zune";

function Bar2D({ data }) {
  ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

  const chartConfigs = {
    type: "bar2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Forked Repos",
        subCaption: "Breakdown of repos depending on forks count",
        theme: "zune",
        decimals: 0,
        pieRadius: "60%",
        yAxisName: "Forks",
        xAxisName: "Repos",
        baseFontSize: "1.3rem",
        valueFontSize: "1.3rem",
        chartLeftMargin: "40",
        chartRightMargin: "40",
      },
      data: data,
    },
  };

  return <ReactFC {...chartConfigs} className="bar2D" />;
}

export default Bar2D;

import "./bar2D.scss";
import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

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
        theme: "candy",
        decimals: 0,
        pieRadius: "60%",
        yAxisName: "Forks",
        xAxisName: "Repos",
      },
      data: data,
    },
  };

  return <ReactFC {...chartConfigs} className="column2D" />;
}

export default Bar2D;

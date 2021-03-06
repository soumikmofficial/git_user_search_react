import "./doughnut.scss";
import React from "react";

import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";

import Column2D from "fusioncharts/fusioncharts.charts";

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

function Doughnut({ data }) {
  // Adding the chart and theme as dependency to the core fusioncharts
  ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

  const chartConfigs = {
    type: "doughnut2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Starred Languages",
        subCaption: "Breakdown of the starred repos based on their languages",
        theme: "fusion",
        decimals: 0,
        pieRadius: "60%",
        theme: "candy",
        showPercentValues: 0,
        chartLeftMargin: "40",
        chartRightMargin: "40",
      },
      data: data,
    },
  };

  return <ReactFC {...chartConfigs} className="doughnut" />;
}

export default Doughnut;

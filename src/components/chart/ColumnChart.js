import "./columnChart.scss";
import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

function ColumnChart({ data }) {
  ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

  const chartConfigs = {
    type: "column2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        subCaption: "Breakdown of the languages used",
        theme: "fusion",
        decimals: 0,
        pieRadius: "60%",
      },
      // Chart Data
      data: data,
    },
  };

  return <ReactFC {...chartConfigs} className="column2D" />;
}

export default ColumnChart;

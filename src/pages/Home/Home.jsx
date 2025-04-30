import React from "react";
import Features from "../../components/features/Features.jsx";
import "./Home.css";
import Chart from "../../components/Chart/Chart.jsx";
import { xAxisData } from "../../data.js";
import WidgetSm from "../../components/widgetSm/widgetSm.jsx";
import WidgetLg from "../../components/WidgetLg/WidgetLg.jsx";

export default function Home() {
  return (
    <div className="home">
      <Features />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />

      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

import React from "react";
import CanvasJSReact from "@canvasjs/react-charts"; 
import "./index.css";
const CanvasJSChart = CanvasJSReact.CanvasJSChart; 

const Chart = () => {
  const options = {
    animationEnabled: true,
    theme: "light2",
    backgroundColor: 'transparent',
    title: {
      text: "Expenses for the last week",
      margin: 20
    },
    axisX: {
      valueFormatString: "DD MMM",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
      },
    },
    axisY: {
      title: "Amount of expenses in drams",
      valueFormatString: " ֏#, ##0",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
        labelFormatter: (e) =>
          `֏${e.value.toLocaleString()}`,
      },
    },
    data: [
      {
        type: "area",
        xValueFormatString: "DD MMM",
        yValueFormatString: " ֏#, ##0",
        dataPoints: [
          { x: new Date("2018-03-01"), y: 20000 },
          { x: new Date("2018-03-02"), y: 120000 },
          { x: new Date("2018-03-03"), y: 50000 },
          { x: new Date("2018-03-04"), y: 32000 },
          { x: new Date("2018-03-05"), y: 24000 },
          { x: new Date("2018-03-06"), y: 56000 },
          { x: new Date("2018-03-07"), y: 84000 },
   
        ],
      },
    ],
  };

  return (
    <div className="main">
      <CanvasJSChart  options={options} />;
    </div>
  );
};

export default Chart;

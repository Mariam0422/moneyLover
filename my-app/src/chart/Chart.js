import React from "react";
import CanvasJSReact from "@canvasjs/react-charts"; 
import { useExpenses } from "../context/ExpensesContext";
import "./index.css";

const CanvasJSChart = CanvasJSReact.CanvasJSChart; 

const Chart = () => {
  const { expenses } = useExpenses();
  const dataPoints = expenses.map((expense) =>( {
    x: new Date(expense.date),
    y: parseFloat(expense.sum)
  }))
  console.log(dataPoints, "data/")
  const options = {
    animationEnabled: true,
    theme: "light2",
    backgroundColor: 'transparent',
    title: {
      text: "Expenses for the last week",
      margin: 20
    },
    axisX: {
      valueFormatString: "YYYY-MM-DD",
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
        dataPoints: dataPoints
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

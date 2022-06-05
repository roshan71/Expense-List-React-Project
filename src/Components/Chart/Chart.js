import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const DataPointsValue=props.dataPoints.map(dataPoints=>dataPoints.value);
    const totalMax=Math.max(...DataPointsValue);
    console.log(DataPointsValue)
    return (

    <div className="chart">
      
      {props.dataPoints.map((x) => (
        <ChartBar
          key={x.label}
          value={x.value}
          maxValue={totalMax}
          label={x.label}
        ></ChartBar>
      ))
      }
    </div>
  );
};

export default Chart;

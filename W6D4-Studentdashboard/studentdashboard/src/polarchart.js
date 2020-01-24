import React, { Component } from "react";
import Data from "./data";
import BarChart from "./barchart";
import "./index.css";

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryArea,
  VictoryPolarAxis
} from "victory";

class Polarchart extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <VictoryChart
          domainPadding={16}
          style={{ parent: { maxWidth: "60%" } }}
          padding={{ left: 80, top: 50, right: 100, bottom: 50 }}
        >
          <VictoryPolarAxis
            dependentAxis
            style={{ axis: { stroke: "none" } }}
            tickFormat={() => null}
          />
          <VictoryPolarAxis />
          <VictoryArea data={Data.difficulty}></VictoryArea>
        </VictoryChart>
      </div>
    );
  }
}

export default Polarchart;

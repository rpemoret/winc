import React, { Component } from "react";
import Data from "./data";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";

const BarChart = function() {
  const exerciseNames = Data.map(item => item.exercise);
  const uniqueExerciseNames = exerciseNames.filter((name, index, names) => {
    return names.indexOf(name) === index;
  });
  const exerciseAverages = uniqueExerciseNames.map(name => {
    const exerciseValues = Data.filter(item => item.exercise === name);
    const difficultyAverage =
      exerciseValues.reduce(
        (previous, current) => previous + current.difficulty,
        0
      ) / exerciseValues.length;
    const funAverage =
      exerciseValues.reduce((previous, current) => previous + current.fun, 0) /
      exerciseValues.length;
    return {
      exercise: name,
      difficultyAverage: difficultyAverage,
      funAverage: funAverage
    };
  });
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <h1>Student dashboard</h1>

      <hr></hr>
      <VictoryChart
        domainPadding={10}
        style={{ parent: { maxWidth: "60%" } }}
        padding={{ left: 80, top: 50, right: 100, bottom: 50 }}
      >
        <VictoryAxis />
        <VictoryAxis dependentAxis tickValues={[1, 2, 3, 4, 5]} />
        <VictoryGroup offset={20}>
          <VictoryBar
            data={exerciseAverages}
            x="exercise"
            y="difficultyAverage"
            style={{ data: { fill: "darkblue", width: 10 } }}
          />
          <VictoryBar
            data={exerciseAverages}
            x="exercise"
            y="funAverage"
            style={{ data: { fill: "#ffcf9e", width: 10 } }}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
};

export default BarChart;

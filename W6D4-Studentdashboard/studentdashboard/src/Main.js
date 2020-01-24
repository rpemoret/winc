import React from "react";
import ReactDOM from "react-dom";
import BarChart from "./barchart";
import Polarchart from "./polarchart";
import Data from "./data";

class Main extends React.Component {
  render() {
    // filter the exercises with difficulty 4 or 5
    const filterhowdifficult = Data.filter(function(e) {
      return e.difficulty > 3;
    });
    console.log(filterhowdifficult, "Exercises with difficulty 4 or 5");

    // filter the exercises with fun 4 or 5
    const filterhowfun = Data.filter(function(e) {
      return e.fun > 3;
    });
    console.log(filterhowfun, "Exercises with fun 4 or 5");

    const element = (
      <div>
        <p>Made with React javascript</p>
      </div>
    );

    return (
      <div>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <BarChart />
        <Polarchart />
        {element}
      </div>
    );
  }
}

export default Main;

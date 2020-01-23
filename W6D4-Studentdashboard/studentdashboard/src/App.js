import React from "react";
import "./index.css";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student dashboard</h1>
        <Container />
      </header>

      <p>Made with React javascript</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;

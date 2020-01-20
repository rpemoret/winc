import React from "react";
import "./index.css";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Playlist</h1>
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

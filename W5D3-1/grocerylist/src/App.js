import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GroceryList from "./components/GroceryList";

// to open use C:\Users\René Moret\Documents\GitHub\winc\W5D3-1>cd grocerylist, npm start
// Container for GroceryList

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Groceries</h1>
        <GroceryList />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          react
        </a>
      </header>

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));

/*
import * as serviceWorker from './serviceWorker';

*/

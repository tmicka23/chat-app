import React from "react";
import "./App.css";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contact />
        <br />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

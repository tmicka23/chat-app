import React from "react";
import "./App.css";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contact
          name="Lonnie Thomas"
          avatar="https://randomuser.me/api/portraits/men/49.jpg"
          isOnline
        />

        <Contact
          name="Jeffery Bradley"
          avatar="https://randomuser.me/api/portraits/men/85.jpg"
        />

        <Contact
          name="Gwendolyn Clark"
          avatar="https://randomuser.me/api/portraits/women/85.jpg"
          isOnline
        />
      </header>
    </div>
  );
}

export default App;

import React from "react";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          React Dictionary
        </header>
        <main>
          <Dictionary />
        </main>
       <footer className="App-footer">Coded by Catarina Ramos</footer>
      </div>
    </div>
  );
}

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
       <footer className="App-footer">
         This project was coded by Catarina Ramos and is open-sourced on <a href="https://github.com/catarinapfcramos/react-dictionary-app" target="_blank" rel="noreferrer">GitHub</a> and hosted on Netlify
       </footer>
      </div>
    </div>
  );
}

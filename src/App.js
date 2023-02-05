import "./App.css";
import React from "react";

import Main from './components/Main';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <Main />
      </main>
    </div>
  );
}

export default App;
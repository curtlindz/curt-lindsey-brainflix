import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './components/Main';
import Upload from "./pages/Upload/Upload";
import axios from 'axios';


function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/:id" element={<Main/>}/>
            <Route path="/upload" element={<Upload/>}/>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
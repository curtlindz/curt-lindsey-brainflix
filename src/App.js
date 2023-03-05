import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './components/Main';
import Upload from "./pages/Upload/Upload";
import axios from 'axios';
import { Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/videoplayer/84e96018-4022-434e-80bf-000ce4cd12b8"/>}/>
            <Route path="/videoplayer/:id" element={<Main/>}/>
            <Route path="/upload" element={<Upload/>}/>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
import { React, useState } from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App

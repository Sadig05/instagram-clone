import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login/Login'
import HomePage from './pages/HomePage/HomePage';

function App() {

  return (

      <BrowserRouter>
        <Routes>
          <Route path ="/" element ={<Login/>}/>
          <Route path="/home" element ={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        Vote2Restock
      </header>
      
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

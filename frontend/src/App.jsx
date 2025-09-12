import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <header>
        Vote2Restock
      </header>
      
      <div className="container">
        <div className="main-section">
          <div class="products-container"></div>
        </div>
        <div className="side-section">
          <div class="vote-container"></div>
        </div>
      </div>
    </>
  )
}

export default App

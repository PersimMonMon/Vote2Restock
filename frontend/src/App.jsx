import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'

function App() {
  return (
    <>
      <header>
        Vote2Restock
      </header>
      
      <div className="container">
        <div className="main-section">
          <div class="products-container">
            <ProductList />
          </div>
        </div>
        <div className="side-section">
          <div class="vote-container"></div>
        </div>
      </div>
    </>
  )
}

export default App

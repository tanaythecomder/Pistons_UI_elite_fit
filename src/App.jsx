import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
// import "/index.css"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path='home' element={<Home />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
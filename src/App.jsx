import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home></Home>}></Route>
      </Routes>
    </div>
  )
}

export default App
import { useState } from 'react'
import './style/App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<h1>Task list</h1>}/>
      <Route path='/add' element={<h1>add Task</h1>}/>
    </Routes>

    </>
  )
}

export default App

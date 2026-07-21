import { useState } from 'react'
import './style/App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Addtask from './components/Addtask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<h1>Task list</h1>}/>
      <Route path='/add' element={<Addtask/>}/>
    </Routes>

    </>
  )
}

export default App

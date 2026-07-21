import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Task from './components/Task'
import Addtask from './components/Addtask'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/task' element={<Task/>}/>
      <Route path='/add-task' element={<Addtask/>}/>
    </Routes>

    </>
  )
}

export default App

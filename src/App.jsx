import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Task from './components/Task'
import Addtask from './components/Addtask'
import Tasklist from './components/Tasklist'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/task' element={<Task/>}/>
      <Route path='/add-task' element={<Addtask/>}/>
      <Route path='/task-list' element={<Tasklist/>}/>
    </Routes>

    </>
  )
}

export default App

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Task from './components/Task'
import Addtask from './components/Addtask'
import Tasklist from './components/Tasklist'
import Edittask from './components/Edittask'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/task' element={<Task/>}/>
      <Route path='/add-task' element={<Addtask/>}/>
      <Route path='/task-list' element={<Tasklist/>}/>
      <Route path='/edit-task' element={<Edittask/>}/>
    </Routes>

    </>
  )
}

export default App

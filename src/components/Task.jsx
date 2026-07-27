import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import '../style/task.css'


function Task() {
     const[products, setproducts] = useState([])
  const navigate = useNavigate()
  return (
    <div>

    <div className='main'>
      <div className='main2'>

        <h1>TO DO APP</h1>
        <ul className='nav-list'>
          <li><Link to={'/task-list'}>List Task</Link></li>
          <li><Link to={'/add-task'}>Add Task</Link></li>
        </ul>
      </div>
        {/* <button className='btn'  onClick={()=>{navigate("/add-task")}}>Add Task</button> */}
       
    </div>
    <div className="hero">
    <div className='hero2'>

      <h1>Manage Your Daily Tasks with Ease</h1>
      <p>Never miss an important task again. 
        Plan your day, stay organized, and boost your
        productivity effortlessly.</p>
        <div className='btn-two'>
          <button className='hero-btn' onClick={()=>{navigate("/task-list")}}>View Work</button>
          <button className='hero-btn' onClick={()=>{navigate("/add-task")}}>Add Task</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Task

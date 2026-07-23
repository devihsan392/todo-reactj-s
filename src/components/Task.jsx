import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import '../style/task.css'


function Task() {
     const[products, setproducts] = useState([])
  const navigate = useNavigate()
  return (
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
  )
}

export default Task

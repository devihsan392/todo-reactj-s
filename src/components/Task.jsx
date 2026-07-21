import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../style/task.css'


function Task() {
     const[products, setproducts] = useState([])
  const navigate = useNavigate()
  return (
    <div className='main'>
        <h1>TO DO APP</h1>
        <button className='btn'  onClick={()=>{navigate("/add-task")}}>Add Task</button>
       
    </div>
  )
}

export default Task

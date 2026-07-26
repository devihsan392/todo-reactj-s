import React from 'react'
import '../style/tasklist.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
// import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Tasklist() {
    const[tasks, settasks] = useState([])
  const navigate = useNavigate()
  async function fetchTasks() {
    const res = await axios.get('http://localhost:3200/tasks')
    settasks(res.data)
  }
  useEffect(()=>{
    fetchTasks()

  },[])
  // async function deleteTask(id) {
  //   const data = await axios.delete(`http://localhost:3200/tasks/${id}`)
  //   const singleTask = tasks.filter((meratask)=> meratask._id !== id)
  //   settasks(singleTask) 
  // }
  return (
    <div>
      <h1>to do list</h1>
      <ul className='task-list'>
        <li className='list-header'>S.No</li>
        <li className='list-header'>Title</li>
        <li className='list-header'>Description</li>
        <li className='list-header'>Action</li>
         {
        tasks.map((meratask,index)=>{
            return(

              <>
        <li className='list-item'>{index+1}</li>
        <li className='list-item'>{meratask.title}</li>
        <li className='list-item'>{meratask.description}</li>
        <li className='list-item'>
          <div>

          <button>Delete</button>
          <button>Edit</button>
          </div>
          </li>
            </>
            )
          })
        }

       
      </ul>
    </div>
  )
}




export default Tasklist

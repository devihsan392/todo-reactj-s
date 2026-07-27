import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';
import '../style/edittask.css'

function Edittask() {

    const [task, setTask] = useState({
    title:"",
    description:""
  })
  const navigate = useNavigate()
  const params = useParams();
  console.log(params.id);
  
  function changeHandler(e) {
    const name =  e.target.name;
    const value = e.target.value;
    setTask({...task, [name]:value})
  }
  async function submitHandler(e) {
    e.preventDefault();
    const res = await axios.patch(`http://localhost:3200/tasks/${params.id}`, task);
    console.log(res);
    setTask({
      title:"",
      description:""
    })
    navigate('/task-list')
    
  }
    async function getTaskById() {
    const res = await axios.get(`http://localhost:3200/tasks/${params.id}`) 
    console.log(res.data);
    setTask(res.data)
  }
  useEffect(()=>{
    getTaskById();
    
  }, [])




  return (
     <div className='container'>
      <h1>Edit You Task</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="">Task Title</label>
        <input type="text"  placeholder='Enter your task'
        value={task.title}
        name='title'
        onChange={changeHandler}
        />
        <label htmlFor="">Task Description</label>
        <input type="text" placeholder='Enter your task description'
        value={task.description}
        name='description'
        onChange={changeHandler}
        />
        <button className='submit' type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Edittask

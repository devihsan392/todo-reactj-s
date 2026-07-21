import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Addtask() {

      const [task, setTask] = useState({
    title:"",
    description:""
  })
  const navigate = useNavigate()
  function changeHandler(e) {
    const name =  e.target.name;
    const value = e.target.value;
    setTask({...task, [name]:value})
  }
  async function submitHandler(e) {
    e.preventDefault();
    const res = await axios.post("http://localhost:3200/create", task);
    console.log(res);
    setTask({
      title:"",
      description:"",
    })
    navigate("/task")
    
  }


  return (
    <div className='container'>
      <h1>Add You Task</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="">Task Title</label>
        <input type="text"  placeholder='Enter your task'
         value={task.title}
        onChange={changeHandler}
        name="title"
        />
        <label htmlFor="">Task Description</label>
        <input type="text" placeholder='Enter your task description'
        value={task.description}
        onChange={changeHandler}
        name="description"
        />
        <button className='submit' type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Addtask

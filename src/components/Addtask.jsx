import React from 'react'
import '../style/addtask.css'
function Addtask() {
  return (
    <div className='container'>
      <h1>Add New Task</h1>
      <form >
        <label htmlFor="">Title</label>
        <input type="text" name='title' placeholder='Enter task title' />
        <label htmlFor="">Description</label>
        <textarea name="description" placeholder='Enter task description' id=""></textarea>
        <button className='submit'>Add New Task</button>
      </form>
    </div>
  )
}

export default Addtask

import React from 'react'
import Swal from "sweetalert2";
import '../style/tasklist.css'
import axios from 'axios'
import "sweetalert2/dist/sweetalert2.min.css";
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

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
// const deleteTask = async (id) => {
//   const confirmDelete = window.confirm(
//     "Are you sure you want to delete this task?"
//   );
//   if (confirmDelete) {
//     await axios.delete(`http://localhost:3200/tasks/${id}`);
//     const singleTask = tasks.filter((meratask)=> meratask._id !== id)
//     settasks(singleTask) 
//     // fetchTasks(); // Data dobara load karne ke liye
//   } else {
//     return;
//   }
// };



const deleteTask = async (id) => {
  const result = await Swal.fire({
    title: "Delete Task?",
    text: "Do you really want to delete this task?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",

    customClass: {
      confirmButton: "my-confirm-btn",
      cancelButton: "my-cancel-btn",
    },

    buttonsStyling: false,
  });

  if (result.isConfirmed) {
    await axios.delete(`http://localhost:3200/tasks/${id}`);
    fetchTasks();

    Swal.fire({
      title: "Deleted!",
      text: "Your task has been deleted.",
      icon: "success",
      confirmButtonText: "OK",

      customClass: {
        confirmButton: "my-ok-btn",
      },

      buttonsStyling: false,
    });
  }
};




// const deleteTask = async (id) => {
//   const result = await Swal.fire({
//     title: "Delete Task?",
//     text: "Do you really want to delete this task?",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Yes",
//     cancelButtonText: "No",
//      customClass: {
//     confirmButton: "my-confirm-btn",
//     cancelButton: "my-cancel-btn",
//   },
//   buttonsStyling: false,
//   });

//   if (result.isConfirmed) {
//     await axios.delete(`http://localhost:3200/tasks/${id}`);
//     fetchTasks();

//     Swal.fire("Deleted!", "Your task has been deleted.", "success");
    
//   }
// };




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
          <div className='btn'>
          <button className='btn1' onClick={()=>deleteTask(meratask._id)}>Delete</button>
          <button className='btn2' onClick={()=>navigate(`/edit-task/${meratask._id}`)}>Edit</button>  
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

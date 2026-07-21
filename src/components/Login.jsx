import axios, { Axios } from 'axios'
import React, { useState } from 'react'
// import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import '../style/login.css'

function Login() {
     const [userdata, setUserdata] = useState({
    email:"",
    password:""
  })
  const navigate = useNavigate()
  function changeHandler(e) {
    const name =  e.target.name;
    const value = e.target.value;
    setUserdata({...userdata, [name]:value})
  }
  async function submitHandler(e) {
    e.preventDefault();
      try {
        
        const res = await axios.post("http://localhost:3200/login", userdata)
        console.log(res)
        setUserdata({
          email:"",
          password:""
        })
        navigate("/task")
      } catch (error) {
        console.log(error);
        
      }

  }
  return (
    <div className='container'>
      <h1>LogIn</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="">Email</label>
        <input type="email"  placeholder='Enter your email'
         value={userdata.email}
        onChange={changeHandler}
        name="email"
        />
        <label htmlFor="">Password</label>
        <input type="password" placeholder='Enter your password'
        value={userdata.password}
        onChange={changeHandler}
        name="password"
        />
        <p>Don't have an account?please <Link to="/register">Signup</Link></p>
        <button className='submit' type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Login

import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import '../style/register.css'

function Register() {

    const [userdata, setUserdata] = useState({
    username:"",
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
      
      const res = await axios.post("http://localhost:3200/register", userdata)
      console.log(res)
      setUserdata({
        username:"",
        email:"",
        password:""
      })
      navigate("/")
    } catch (error) {
      console.log(error);
      
    }
  }


  return (
    <div className='container'>
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler} >
        <label htmlFor="">Username</label>
        <input type="text" placeholder='Enter yourname'
        value={userdata.username}
        onChange={changeHandler}
        name="username" 
        />
        <label htmlFor="">Email</label>
        <input type="email" placeholder='Enter your email'
        value={userdata.email}
        onChange={changeHandler}
        name="email" 
        />
        <label htmlFor="">Password</label>
        <input type="password"  placeholder='Enter your password' 
        value={userdata.password}
        onChange={changeHandler}
        name= "password" 
        />
        <p>Don't have an account?please <Link to={'/'} >Login</Link></p>
        <button className='submit'type='submit' >submit</button>
      </form>
    </div>
  )
}

export default Register

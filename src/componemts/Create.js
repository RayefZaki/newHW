import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

function Create() {
    const[email,setEmail]=useState()
    const[pass,setPass]=useState()
    
    let url = "https://6362424b7521369cd068e00e.mockapi.io/ToDoList"

    let navigate = useNavigate();
    const postData=()=>{
        axios.post(url,{
            email,pass

        }).then(res =>{
            console.log(res)
            localStorage.setItem('email', email);
            localStorage.setItem('password', pass);
        })
        navigate('/GitCreate');
    }
  return (
    <div>


        <input placeholder='Email' onChange={e=>{setEmail(e.target.value) }}></input>
        <input placeholder='password' onChange={e=>{setPass(e.target.value) }}></input>
        <button onClick={postData}>LogIn</button>



    </div>
  )
}

export default Create
import React, {useState} from 'react'
import axios from 'axios'

function Create() {
    const[fName,setFName]=useState()
    const[lName,setLName]=useState()
    const[email,setEmail]=useState()
    const[pass,setPass]=useState()
    
    let url = "https://6362424b7521369cd068e00e.mockapi.io/ToDoList"

    const postData=()=>{
        axios.post(url,{
            fName,
            lName,
            email,pass

        }).then(res =>{
            console.log(res)
        })

    }
  return (
    <div>

        <input placeholder='FName' onChange={e=>{setFName(e.target.value) }}></input>
        <input placeholder='LName' onChange={e=>{setLName(e.target.value) }}></input>
        <input placeholder='Email' onChange={e=>{setEmail(e.target.value) }}></input>
        <input placeholder='password' onChange={e=>{setPass(e.target.value) }}></input>
        <button onClick={postData}>LogIn</button>



    </div>
  )
}

export default Create
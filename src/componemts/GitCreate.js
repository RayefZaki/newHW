import React from 'react'
import {  useEffect, useState } from 'react';
import axios from 'axios';


function GitCreate() {
  const [state, setState] = useState([])

  useEffect(()=> {
    axios.get("https://6362424b7521369cd068e00e.mockapi.io/ToDoList").then((res) =>{
      console.log(res.data);
      setState(res.data);
      
    })
  },[])
return (
    
        
        <div className="App">
          {state.map(items=>{
            return(
              <>
              <p>First name: {items.fName}</p>
              <p>Last Name: {items.lName}</p>
              <p>Email Name: {items.email}</p>
              <p>Pass Name: {items.pass}</p>
              {/* <img src={items.image}></img> */}
              </>
              
            )
          })}
    
        </div>
  )
}

export default GitCreate
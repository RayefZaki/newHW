import React from 'react'
import {  useEffect, useState } from 'react';
import axios from 'axios';


function GitCreate() {
  const [state, setState] = useState([])

  useEffect(()=> {
    axios.get("https://rickandmortyapi.com/api/character").then((res) =>{
      console.log(res.data);
      setState(res.data.results);
      
    })
  },[])
return (
    
        
        <div className="App">
          {state.map(items=>{
            return(
              <>
              <p>name:{items.name}</p>

              <img src={items.image}></img>
              </>
              
            )
          })}
    
        </div>
  )
}

export default GitCreate
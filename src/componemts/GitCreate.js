import React from 'react'
import {  useEffect, useState } from 'react';
import axios from 'axios';


function GitCreate() {
  const [state, setState] = useState([])

  useEffect(()=> {
    axios.get("https://mcuapi.herokuapp.com/api/v1/movies?page=1&limit=10&columns=title%2Crelease_date%2Ccover_url&order=chronology%2CDESC&filter=title%3DIron").then((res) =>{
      console.log(res.data.data);
      setState(res.data.data);
      
    })
  },[])
return (
    
        
        <div className="App">
          {state.map(items=>{
            return(
              <>
              <p>name:{items.title}</p>

              <img src={items.cover_url}></img>
              </>
              
            )
          })}
    
        </div>
  )
}

export default GitCreate
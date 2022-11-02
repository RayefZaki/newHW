import './App.css';
import {  useEffect, useState } from 'react';
import axios from 'axios';
import Create from './componemts/Create';
import GitCreate from './componemts/GitCreate';

function App() {
//   const [state, setState] = useState([])

//   useEffect(()=> {
//     axios.get("https://rickandmortyapi.com/api/character").then((res) =>{
//       console.log(res.data.results);
//       setState(res.data.results);
      
//     })
//   },[])
  return (
    <>
<Create></Create>
<GitCreate></GitCreate>
    
     {/* <div className="App">
        {state.map(items=>{ */}
{/* //         return(
//           <>
//           <p>name: {items.name}</p>
//           <img src={items.image}></img>
//           </>
          
//         )
//       })}

//     </div> */}
</>
  );
}

export default App;

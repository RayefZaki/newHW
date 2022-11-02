import React from 'react'

function fakeapi() {

    const [state, setState] = useState([])

    useEffect(()=> {
      axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) =>{
        console.log(res.data);
        setState(res.data);
        
      })
    }),[])
    return (
      <div className="App">
        {state.map(items=>{
          return(
            <>
            <p>title: {items.title}</p>
            <p>body: {items.body}</p>
            </>
          )
        })}
  
      </div>
  )
}

export default fakeapi
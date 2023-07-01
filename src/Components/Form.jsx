import React, { useState } from 'react'
import { useRef } from 'react'

function Form(props) {
  const [count, setCount] = useState({number:10})
    let name = useRef();
    let price =useRef();
    const fromSubmited =(e)=>{
    e.preventDefault();
    let name = e.target[0].value;
    let price = e.target[1].value;
    props.func(name,price)
}
  return (
    <div>
      <form onSubmit={fromSubmited}>
          <input type="text" ref={name}/>
          <input type="number" ref={price}/>
          <button type='submit'>added</button>
      </form>
      <button onClick={()=> {
       setCount((prev)=>({...prev,number:prev.number-1}))
       setCount((prev)=>({...prev,number:prev.number-1}))
      // setCount({...count,last:"Gray"})  
       console.log(count)
      }}>-</button>

      <label >count is : {count.number}</label>

      <button onClick={()=> {
        setCount((prev)=>({...prev,number:prev.number+1}))
        setCount((prev)=>({...prev,number:prev.number+1}))
        //setCount(({...count,first:"red"}))
        console.log(count)
      }}>+</button>
    </div>
  )
}

export default Form

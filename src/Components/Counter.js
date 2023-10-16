import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'

const PLUS = "PLUS"

const counterReduser=(prevState, action)=>{
    console.log(action);
    console.log("COUNTER");
    console.log(prevState);
    if(action.type ==="PLUS"){
        return prevState + 1
    }
    if(action.type === "MINUS"){
        return prevState - 1
    }
    if(action.type === "PLUS5"){
        return prevState + action.sun
    }
    return prevState
}

const Counter = () => {

    const [ state, setState] = useState(0)
    const [ test, dispatchTest] = useReducer(counterReduser,10)

    const plus=()=>{
   
        dispatchTest({type: "PLUS"})
    }

    const minus=()=>{
        dispatchTest({type: "MINUS"}) 
    }
    const plus5=()=>{
        dispatchTest({type: "PLUS5", sun: 5}) 
    }

  return (
    <div>
      <button onClick={plus }>+</button>
      <h1>{test}</h1>
      <button onClick={minus}>-</button>
      <button onClick={plus5}>+5</button>
    </div>
  )
}

export default Counter

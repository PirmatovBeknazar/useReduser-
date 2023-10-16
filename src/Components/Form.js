import React, { useEffect, useReducer, useState } from 'react'
const inputReducer = (state, action) => {
    if (action.type === "NAME") {
        return {
            ...state,
            name: action.payload,
            nameValid: action.payload.length > 5
        }
    }
    if (action.type === "EMAIL") {
        return {
            ...state,
            email: action.payload,
            emailValid: action.payload.includes("@")
        }
    }
    return state
}
const Form = () => {
    const [disabled, setIsDisabled] = useState(true)
    const [inputValue, dispatchInputValue] = useReducer(inputReducer, {
        name: "",
        email: "",
        nameValid: null,  
        emailValid: null  
    })
    const nameHandler = (e) => {
        dispatchInputValue({ type: "NAME", payload: e.target.value })
    }
    const emailHandler = (e) => {
        dispatchInputValue({ type: "EMAIL", payload: e.target.value })
    }
    useEffect(() => {
        setIsDisabled(!(inputValue.nameValid && inputValue.emailValid))
    }, [inputValue.nameValid, inputValue.emailValid])
    return (
        <div>
            <input style={{ border: inputValue.nameValid === false ? "2px solid red" : "" }} onChange={nameHandler} type="text" />
            <input style={{ border: inputValue.emailValid === false ? "2px solid red" : "" }} onChange={emailHandler} type="text" />
            <button style={{background: disabled === false ? "green": "red"}} disabled={disabled}>ADD</button>
        </div>
    )
}
export default Form
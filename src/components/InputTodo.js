import React, { useState } from "react"

const InputTodo = props => {
  const [inputText, setInputText] = useState({
    fName: "",
    lastName: "",
  })

  const onChange = e => {
    setInputText(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log("submitted")
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add first name"
          value={inputText.fName}
          name="fName"
          onChange={onChange}
        />
        <input
          type="text"
          className="input-text"
          placeholder="Add last name"
          value={inputText.lastName}
          name="lastName"
          onChange={onChange}
        />

        <button className="input-submit">Submit</button>
      </form>
      <h2>{inputText.fName}</h2>
      <h2>{inputText.lastName}</h2>
    </>
  )
}

export default InputTodo
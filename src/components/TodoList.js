/* eslint-disable */ 
import React, { useState } from "react"
import TodoItem from "./TodoItem";

const TodosList = props => {

  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          switch={props.todoSwitch}
          delete={props.deleteTodo}
          update={props.setUpdate}
        />
      ))}
    </ul>
  )

}

export default TodosList
/* eslint-disable */ 
import React, { useState, useEffect } from "react"
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos())

  const switch_item_completion = (id) => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    )
  };

  const delTodo = id => {
    setTodos([
        ...todos.filter(todo => {
          return todo.id !== id;
        })
      ]);
  };

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }

  // useEffect(() => {
  //   console.log("test run")
  //
  //   // getting stored items
  //   const temp = localStorage.getItem("todos")
  //   const loadedTodos = JSON.parse(temp)
  //
  //   if (loadedTodos) {
  //     setTodos(loadedTodos)
  //   }
  // }, [setTodos])

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  return (
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodoList
          todos={todos}
          todoSwitch={switch_item_completion}
          deleteTodo={delTodo}
          setUpdate={setUpdate}
        />
      </div>
  );

}
export default TodoContainer
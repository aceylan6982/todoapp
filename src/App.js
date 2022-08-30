import React, { useState, useEffect } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";


function App() {
  const [todotext, setTodotext] = useState("")
  const [todos, setTodos] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [willUpDateToDo, setwillUpDateToDo] = useState()

  useEffect (() => {
    const fromLocalStorage = localStorage.getItem("todos")
    console.log(fromLocalStorage)
    if(fromLocalStorage === null){
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      setTodos(JSON.parse(fromLocalStorage));
    }
  }, [])

  const changeIsDone = (id) => {
    const searchTodo = todos.find((item) => item.id === id)
    //console.log(searchTodo)
    const updatedTodo = {
      ...searchTodo,
      isDone: !searchTodo.isDone
    }
    const fiteredTodo = todos.filter((item) => item.id !== id)
    setTodos([updatedTodo, ...fiteredTodo])
    localStorage.setItem("todos", JSON.stringify([updatedTodo, ...fiteredTodo]))
  }
  const deleteTodo = (id) => {
    const filteredTodo = todos.filter((item) => item.id !== id)
    setTodos(filteredTodo)
    localStorage.setItem("todos", JSON.stringify(filteredTodo))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (todotext === "") {
      alert("Todo list can't be empty")
      return
    }
    const hasDone = todos.find((item) => item.text === todotext)
    if (hasDone !== undefined) {
      alert("You have already added this staff")
      return
    }
    if (isEdit === true) {
      console.log(willUpDateToDo, "todo'yu güncelleyeceğiz")
      const searchTodo = todos.find((item) => item.id = willUpDateToDo)
      const updatedTodo = {
        ...searchTodo,
        text: todotext
      }
      const filteredTodo = todos.filter((item) => item.id !== willUpDateToDo)
      setTodos([...filteredTodo, updatedTodo])
      localStorage.setItem("todos", JSON.stringify([...filteredTodo, updatedTodo]))
      setTodotext("")
      setIsEdit(false)
      setwillUpDateToDo("")
    } else {
      const newTodo = {
        id: new Date().getTime(),
        isDone: false,
        text: todotext,
        date: new Date(),
      }
      setTodos([...todos, newTodo ])
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo ]))
      setTodotext("")
      //console.log(newTodo)
    }
  }

  return (
    <div className="container" >
      <h1 className="text-center my-5">Todo App</h1>
      <Form handleSubmit={handleSubmit} todotext={todotext} isEdit={isEdit} setTodotext={setTodotext} />
      {
         todos.length <=0 ? (
          <p className="text-center my-5">You don't have any todo list yet!</p>
        ) : (
          <div>
            {
              todos.map(item => (
                <Todo
                  item={item}
                  deleteTodo={deleteTodo}
                  setIsEdit={setIsEdit}
                  setwillUpDateToDo={setwillUpDateToDo}
                  setTodotext={setTodotext}
                  changeIsDone={changeIsDone} />
              ))
            }
          </div>
        )
      }
    </div>
  );
}

export default App;

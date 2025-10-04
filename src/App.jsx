import { useState } from 'react'
import './App.css'
import {TodoProvider} from './context/index'
import { useEffect } from 'react'
import TodoForm from './components/ToDoForm'
import TodoItem from './components/ToDoItem'

function App() {
  const [todos, setTodos] = useState([])
 
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const deleteTodo = (id)=>{
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const updateTodo = (id, todo)=>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id===id ? todo : prevTodo)))
  }

  const toggleComplete = (id)=>{
    setTodos((prev) => prev.map((prevTodo) =>  prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }

  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-500 py-12">
    <div className="bg-white rounded-2xl shadow-lg w-[96%] sm:w-[640px] md:w-[780px] lg:w-[880px] p-8">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">To-Do List</h1>

      {/* Form area */}
      <div className="mb-6">
        <TodoForm />
      </div>

      {/* Tasks list */}
      <div className="space-y-4">
        {todos.length === 0 ? (
          <p className="text-center text-gray-400 py-10">No tasks yet — add one!</p>
        ) : (
          todos.map((todo) => (
            <div key={todo.id}>
              <TodoItem todo={todo} />
            </div>
          ))
        )}
      </div>
    </div>
  </div>

    </TodoProvider>
  )
}

export default App

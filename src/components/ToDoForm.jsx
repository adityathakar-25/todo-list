import { useState } from "react"
import { useTodo } from "../context/index"

function TodoForm() {
    
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()

        if (!todo) return

        addTodo({ todo, completed: false})
        setTodo("")
    } 

    return (
  <form onSubmit={add} className="flex w-full gap-3 items-center">
    <input
      id="new-todo"
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      placeholder="Enter your task..."
      className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
    />

    <button
      type="submit"
      disabled={!todo || !todo.trim()}
      className={`px-5 py-3 rounded-md text-white font-medium transition ${
        todo && todo.trim()
          ? 'bg-green-500 hover:bg-green-400'
          : 'bg-gray-300 cursor-not-allowed'
      }`}
    >
      Add
    </button>
  </form>
);

}

export default TodoForm;
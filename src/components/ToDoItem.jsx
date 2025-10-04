import React from "react"
import { useTodo } from "../context";
import { useState } from "react";

function TodoItem({ todo }) {
    
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
  <div className="flex items-center justify-between bg-[#f8fcff] border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition">
    {/* Left side: checkbox + text */}
    <div className="flex items-center gap-4 flex-1 min-w-0">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleCompleted}
        className="w-5 h-5 accent-blue-500 cursor-pointer flex-shrink-0"
      />

      {isTodoEditable ? (
        <input
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') editTodo(); }}
          className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
        />
      ) : (
        <p className={`flex-1 text-sm font-medium truncate ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {todo.todo}
        </p>
      )}
    </div>

    {/* Right side: Edit / Save / Delete buttons */}
    <div className="flex items-center gap-3 ml-6">
      {isTodoEditable ? (
        <button
          onClick={editTodo}
          className="px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white text-sm transition"
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => setIsTodoEditable(true)}
          className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm transition"
        >
          Edit
        </button>
      )}

      <button
        onClick={() => deleteTodo(todo.id)}
        className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white text-sm transition"
      >
        Delete
      </button>
    </div>
  </div>
);


}

export default TodoItem;
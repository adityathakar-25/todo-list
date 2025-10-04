import { useContext, createContext } from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "message",
            completed: false,
        }
    ],

    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (todo) => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}
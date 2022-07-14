import React, { useReducer, useState } from "react"
import FormTodo from "./FormTodo"

import TodoList from "./TodoList"

type TodoState = {
    id: number
    title: string
}[]

type TodoAction = {
    type: string
    payload: any
}



const initialState = [
    { id: 1, title: 'Todo #1' },
    { id: 2, title: 'Todo #2' },
]

const todoReducer = (state: TodoState = initialState, action: TodoAction ) => {
    switch (action.type) {
        case 'DELETE':
            return state.filter(todo => todo.id !== action.payload)
        case 'ADD':
            return [...state, action.payload]
        case 'UPDATE':
            const todoEdit = action.payload
            console.log(todoEdit)
            return state.map(todo => todo.id === todoEdit.id ? todoEdit : todo)
        default:
            return state
    }
}

const TodoListStyle = {
    margin: '10px',
}


const TodoApp = () => {

    const [todos, todosDispatch] = useReducer(todoReducer, initialState)

    const [text, setText] = useState<string>("")


    const deleteTodo = (id: number) => { todosDispatch({ type: 'DELETE', payload: id }) }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        todosDispatch({
            type: 'ADD',
            payload: { id: Date.now(), title: text }
        })
    }

    const updateTodo = (id: number, todo: TodoState) => { todosDispatch({ type: 'UPDATE', payload: { ...todo, title: text } }) }

    return (<>
        <div style={{ borderRadius: '1px solid coral' }}>

            <h2>TodoApp</h2>

            <FormTodo text={text} handleSubmit={handleSubmit} setText={setText} />

            <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} style={TodoListStyle} />

        </div>
    </>);
}

export default TodoApp;
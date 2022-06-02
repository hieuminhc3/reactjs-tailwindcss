import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const todos = useSelector((state)=>state.todos)
    return (
        <div className=''>
            {
                todos.map((element, index) => <Todo item={element} key={element.id}/>)
            }
        </div>
    )
}

export default TodoList
import React from 'react'
import {MdClose} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../redux/todoSlice'

const Todo = (props) => {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    const item = props.item
    const handleClick = (id) => {
        dispatch(removeTodo(id))
    }
    return (
        <div className=''>
            <h2>{item.name}</h2>
            <MdClose size={24} color='red' onClick={() => handleClick(item.id)}/>
        </div>
    )
}

export default Todo
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo, getTodo} from '../redux/todoSlice'
import { v4 as uuidv4 } from 'uuid';

const TodoForm = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch();
    const handleClick = (event) => {
        event.preventDefault();
        setInput('')
        dispatch(addTodo({
            id: uuidv4(),
            name: input,
            completed: false
        }))
    }
    const hanldeChange = (event) => {
        setInput(event.target.value);
    }
    
    return (
        <div className=''>
            <form onSubmit={handleClick}>
                <input type="text" name="text" placeholder='Input a todo' value={input} onChange={hanldeChange}/>
                <button className='font-bold bg-blue-900' type='submit'>Add</button>
            </form>
        </div>
      )
}

export default TodoForm
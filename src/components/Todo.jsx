import React from 'react'
import {MdClose} from 'react-icons/md'

const Todo = (props) => {
    const item = props.item
    return (
        <div className='flex flex-row'>
            <MdClose color='red' />
            <h2>{item.name}</h2>
        </div>
    )
}

export default Todo
import React from 'react'
import Todo from './Todo'

const data = [
    {
        id: 1,
        name: 'ReactJs'
    },
    {
        id: 2,
        name: 'VueJs'
    },
    {
        id: 3,
        name: 'AngularJs'
    }
]

const TodoList = () => {
  return (
    <div className=''>
        <h2>Todo List</h2>
        {
            data.map((element, index) => <Todo item={element} />)
        }
    </div>
  )
}

export default TodoList
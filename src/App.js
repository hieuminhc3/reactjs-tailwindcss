import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div className='h-screen bg-gradient-to-r from-green-300 to-blue-300 p-4'>
      <div className="text-center bg-white ">
          <h1 className="text-2xl text-gray-700">Todo List</h1>
          <TodoForm />
          <TodoList />
      </div>
    </div>
  )
}

export default App

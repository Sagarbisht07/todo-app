import { useState } from 'react'
import './App.css'
import TodoList from './TodoList/TodoList'
import AutoSelect from './AutoSelect/AutoSelect'

function App() {

  return (
    <>
      <h1>Todo List</h1>
      <TodoList/>
      <h1>Auto Complete Select</h1>
      <AutoSelect/>
    </>
  )
}

export default App

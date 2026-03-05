import { useState } from 'react'
import './App.css'
import TodoList from './TodoList/TodoList'
import AutoSelect from './AutoSelect/AutoSelect'
import PlayRedDotGame from './TestInterview/Interview'

function App() {

  return (
    <>
      {/* <h1>Todo List</h1>
      <TodoList/>
      <h1>Auto Complete Select</h1>
      <AutoSelect/> */}
      <h1>Red Dot Game</h1>
      <PlayRedDotGame/>
    </>
  )
}

export default App

import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm'
import './App.css'

function App() {
  
  // const todos = [
  //   {id: 1, title: "review resource"},
  //   {id: 2, title: "take notes"},
  //   {id: 3, title: "code out app"},
  // ]
const [newTodo, setNewTodo]=useState('Example Text')
  return (
    <>
      <div>
        <h1>My Todos</h1>
        <TodoForm/>
        <p>{newTodo}</p>
        <TodoList/>
      </div>
    </>
  )
}

export default App

import { useState } from 'react';
import './App.css';
import TasksDisplay from './components/TasksDisplay';
import TodoList from './components/TodoList';

function App() {
  const [currentTasks, setCurrentTasks] = useState("")

  return (
    <>
    <TodoList/>
    <TasksDisplay task={""}/>
    </>
  )
}

export default App

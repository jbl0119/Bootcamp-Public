import { useState } from 'react'
import './App.css'
import Box from './components/Box'
import BoxDisplay from './components/DisplayBox'

function App() {
  const [currentBoxes, setCurrentBoxes] = useState([]);

  return (
    <>
    <Box></Box>
    <BoxDisplay box={currentBoxes}></BoxDisplay>
    </>
  )
};

export default App

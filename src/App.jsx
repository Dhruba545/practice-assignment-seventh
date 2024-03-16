import { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Ourrecipe from './Components/Ourrecipe/Ourrecipe';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Ourrecipe></Ourrecipe>
    </>
  )
}

export default App

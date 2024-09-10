import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Button from './Components/Button'
import Component01 from './Components/Component01'
import { CounterContext } from './Context/Context'


function App() {
  const[api,setapi] = useState([])
  
  useEffect(()=>{
    const apio = async()=>{
  
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1',{
          method : "GET"
        })
        const res = await data.json()
        setapi(res) 
      }
    

      apio()
  },[])
  return (
    <>
    <CounterContext.Provider value = {api}>

    
    <Component01/>
   
    </CounterContext.Provider>
    </>
  )
}

export default App

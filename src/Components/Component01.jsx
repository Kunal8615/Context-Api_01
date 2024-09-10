import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../Context/Context'

function Component01() {
  const counter = useContext(CounterContext)
  return (
    <div>
      here is the data
   
      {counter.title}
 
    </div>
  )
}

export default Component01

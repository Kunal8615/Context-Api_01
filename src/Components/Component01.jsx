import React from 'react'

//for use
import { useContext } from 'react'
import { CounterContext } from '../Context/Context'

function Component01() {
  const counter = useContext(CounterContext)
  return (
    <div>
    {counter}
    </div>
  )
}

export default Component01

import { useState } from 'react'

const useCounter = () => {  //Custom hook
  const [value, setValue ] = useState(0)

  const increase = () => {
    setValue(value + 1)
  }

  const decrease = () => {
    setValue(value - 1)
  }

  const zero = () => {
    setValue(0)
  }

  return { value, increase, decrease, zero }
}

const useField = (type) => {
  const [value, setValue ] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return { type, value, onChange }
}

function App() {
  const counter = useCounter()

  const left = useCounter()
  const right = useCounter()

  const name = useField('text')
  const born = useField('date')
  const height = useField('number')


  const space = {height: '15px'}

  return (
    <div>
      <div>{counter.value}</div>
      <button onClick={counter.increase}>
        plus
      </button>
      <button onClick={counter.decrease}>
        minus
      </button>      
      <button onClick={counter.zero}>
        zero
      </button>

      <div style={space}/>

      <div>
        {left.value}
        <button onClick={left.increase}>
          left
        </button>
        <button onClick={right.increase}>
          right
        </button>
        {right.value}
      </div>

      <div style={space}/>

      <div>
        <form>
          <input {...name}/>
          <input {...born}/>
          <input {...height}/>
        </form>
        <div>
          {name.value} {born.value} {height.value}
        </div>
      </div>
    </div>  
    
  )
}

export default App

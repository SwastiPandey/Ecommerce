import React, { useState } from 'react'

const Counter = () => {
  const [num, setNumA] = useState(1);
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')

  const handleDecrement = () => {
    if (num <= 0) {
      setNumA(0)
    } else {

      setNumA(num - 1)
    }


  }

  const handleIncrement = () => {
    setNumA(num + 1);
  }

  return (
    <div>
      <form>
        <input type='text' placeholder='firstName' value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
        <input type='text' placeholder='secondname' value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
      </form>
      <h1>{num}</h1>
      <div>
        <button onClick={handleIncrement}>Add</button>
        <button onClick={handleDecrement}>Substraction</button>
      </div>
    </div>
  )
}
export default Counter

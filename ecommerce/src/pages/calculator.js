import React, { useState } from 'react'

const Calculator = () => {
  
  const [firstNum, setFirstNum] = useState('')
  const [secondNum, setSecondNum] = useState('')


  const [Calculate, setCalculate] = useState('')

  const handleAdd = () => {
    setCalculate(firstNum + secondNum)
  }
  const handleSubstraction = () => {
    setCalculate(firstNum - secondNum)
  }
  const handleMultiply = () => {
    setCalculate(firstNum * secondNum)
  }
  const handleDivide = () => {
    setCalculate(firstNum / secondNum)
  }


  return (
    <div>

      Calculate : {Calculate}


      <form>
        <input type='text' placeholder='firstName' value={firstNum} onChange={(e) => setFirstNum(Number(e.target.value))} />
        <input type='text' placeholder='secondname' value={secondNum} onChange={(e) => setSecondNum(Number(e.target.value))} />
      </form>
     
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubstraction}>Substraction</button>
        <button onClick={handleMultiply}>Multiply</button>
        <button onClick={handleDivide}>Divide</button>


      </div>
    </div>


  )
}

export default Calculator
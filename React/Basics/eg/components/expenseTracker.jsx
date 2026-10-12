import React, { useState } from 'react'

function ExpenseTracker() {

  const [input, setInput] = useState("")
  const [income, setIncome] = useState([])
  const [expense, setExpense] = useState([])
  const [type, setType] = useState("Income")


  function addTransaction() {


    if (input.trim() === "" || Number(input) <= 0) return;
    if (type === "Income") {
      setIncome((prev) => [...prev, Number(input)])
    } else {

      setExpense((prev) => [...prev, Number(input)])
    }

    setInput("")
  }

  return (<>

    <input placeholder="enter your data" value={input} onChange={(e) => setInput(e.target.value)} />

    <select value={type} onChange={((e) => setType(e.target.value))}>
      <option value="Income">Income</option>
      <option value="Expense">Expense</option>
    </select >

    <button onClick={addTransaction}>Add</button>
    <p>Income</p>
    <ul >
      {
        income.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
      <p>Total : {income.reduce((total, index) => (
        total += index
      ), 0)}</p>
    </ul>

    <p>Expense</p>
    <ul >
      {
        expense.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
      <p>Total : {expense.reduce((total, index) => (
        total += index
      ),  0)}</p>
    </ul>


  </>)
}
export default ExpenseTracker;
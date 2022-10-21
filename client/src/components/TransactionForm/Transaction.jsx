import React from 'react'

export default function Transaction({ transaction, setBudgetHidden }) {

  const handleOnSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleOnSubmit} >
      <div>
        <h3>New {transaction.type}</h3>
      </div>
      <div>
        <label>Concept: </label>
        <input type='text' />
      </div>
      <div>
        <label>Date: {transaction.monthName} </label>
        <input type='number' min={1} max={31} />
        {/* <input type='date'  */}
      </div>
      <div>
        <label>Amount: </label>
        <input type='number' step='0.01' min={0} />
      </div>
      <div>
        <input type='submit' />
        <button onClick={() => setBudgetHidden(false)} >Go Back</button>
      </div>
    </form>
  )
}

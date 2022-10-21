import React, { useState } from 'react';
import Months from './Months';
import mock from '../mock/mock.json'
import year from '../assets/months';
import Transaction from './TransactionForm/Transaction';

export default function Budget() {

  const [months, setMonths] = useState(mock);
  const [budgetHidden, setBudgetHidden] = useState(false);
  const [transaction, setTransaction] = useState({});

  const addMonth = () => {
    const lastMonth = months[months.length -1].name;
    const indexMonth = year.indexOf(lastMonth)
    if(lastMonth === 'December'){
      setMonths(months.concat({
        "monthID": months[months.length -1].monthID + 1,
        "name": year[0],
        "total": 0,
        "incomes": [],
        "expenses": []
      }))
    }else{
      setMonths(months.concat({
        "monthID": months[months.length -1].monthID + 1,
        "name": year[indexMonth + 1],
        "total": 0,
        "incomes": [],
        "expenses": []
      }))
    }
  }

  const handleTransaction = (type) =>{
    setBudgetHidden(true)
    setTransaction(type)
  };

  
  
  return (
    <div>
      <div className={budgetHidden ? "hidden" : "flex flex-col w-[500px]"}>
        {
          months && months?.map(month => (
            <Months month={month} key={month.monthID} handleTransaction={handleTransaction} />
          ))
        }
        <div className="flex justify-center p-2 mt-1 rounded-md bg-green-700 text-pink-400 hover:bg-green-400">
          <button onClick={addMonth} >
            Add month
          </button>
        </div>
      </div>

      <div className={budgetHidden ? "flex flex-col w-[500px]" : "hidden"}>
        <Transaction transaction={transaction} setBudgetHidden={setBudgetHidden} />
      </div>
    </div>
  )
}

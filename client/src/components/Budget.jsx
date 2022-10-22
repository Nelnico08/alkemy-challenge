import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Months from './Months';
// import mock from '../mock/mock.json'
import year from '../assets/months';
import Transaction from './TransactionForm/Transaction';
import { getMonths } from '../redux/actions';

export default function Budget() {

  const months = useSelector(state => state.months)

  const [budgetHidden, setBudgetHidden] = useState(false);
  const [transaction, setTransaction] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMonths())
  }, [])
  

  const addMonth = () => {
    //continuara
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

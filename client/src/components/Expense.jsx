import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { BsPencilFill } from 'react-icons/bs'

export default function Expense({ month }) {
  return (
    <div>
      <div className='bg-red-700 text-center font-bold'>
        <h3>Expenses</h3>
      </div>
      <div>
        {
          month?.expenses && month?.expenses?.map(expense => (
            <div key={expense.id} className="flex justify-between pl-2 p-1 border-black border-[1px] bg-red-600" >
              <div className='flex flex-col flex-1'>
                <p><b>Concept:</b> {expense.concept}</p>
                <p><b>Date:</b> {expense.date}</p>
              </div>
                <div className='flex flex-col-reverse font-bold min-w-[100px]'>
                  <p className='text-right'>${expense.amount}</p>
                  <div className='flex justify-end'>
                    <button className='mr-2'><BsPencilFill /></button>
                    <button><FaTrashAlt /></button>
                  </div>
                </div>
            </div>
          ))
        }
      </div>
      <div className="flex justify-center p-2 mt-1 mb-2 rounded-md bg-blue-700 text-pink-400 hover:bg-cyan-700">
        <button>Add Expense</button>
      </div>
    </div>
  )
}
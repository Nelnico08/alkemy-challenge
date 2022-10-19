import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { BsPencilFill } from 'react-icons/bs'

export default function Income({ month }) {
  return (
    <div>
      <div className='bg-green-700 text-center font-bold mt-1'>
        <h3>Incomes</h3>
      </div>
      <div>
        {
          month?.incomes && month?.incomes?.map(income => (
            <div key={income.id} className="flex justify-between pl-2 p-1 border-black border-[1px] bg-green-600" >
              <div className='flex flex-col flex-1'>
                <p><b>Concept:</b> {income.concept}</p>
                <p><b>Date:</b> {income.date}</p>
              </div>
                <div className='flex flex-col-reverse font-bold min-w-[100px]'>
                  <p className='text-right'>${income.amount}</p>
                  <div className='flex justify-end'>
                    <button className='mr-2'><BsPencilFill /></button>
                    <button><FaTrashAlt /></button>
                  </div>
                </div>
            </div>
          ))
        }
      </div>
      <div className="flex justify-center p-2 my-1 rounded-md bg-blue-700 text-pink-400  hover:bg-cyan-700">
        <button>Add Income</button>
      </div>
    </div>
  )
}

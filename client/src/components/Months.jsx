import React, { useState } from 'react'
import { FaArrowAltCircleDown, FaArrowAltCircleLeft } from 'react-icons/fa'
import Income from './Income'
import Expense from './Expense'

export default function Months({ month, handleTransaction }) {

  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState('')

  const handleOnClick = () => {
    setIsOpen(!isOpen)
    setHidden(hidden === '' ? 'hidden' : '')
  }

  return (
    <div>
      <div key={month?.monthID} 
        className={hidden === '' ? "flex justify-between pr-1 p-2 border-black border-[1px] bg-blue-400 font-bold select-none cursor-pointer hover:bg-cyan-400" : 'hidden'} 
        onClick={handleOnClick} >
        <h3>{month.name}</h3>
        <div className='flex items-center'>
          <p>${month.total}</p>
          <div className='w-5 h-5 flex justify-center items-center ml-3' ><FaArrowAltCircleDown /></div>
        </div>
      </div>
      <div>
        {
          isOpen &&
          <div className='flex flex-col w-[500px] mt-2' >
            <div className="flex justify-between pr-1 p-2 border-black border-[1px] bg-blue-700 font-bold cursor-pointer" onClick={handleOnClick} >
              <h3>{month?.name}</h3>
              <div className='flex items-center' >
                <p>${month?.total}</p>
                <div className='w-5 h-5 flex justify-center items-center ml-3'><FaArrowAltCircleLeft /></div>
              </div>
            </div>
            <Income month={month} handleTransaction={handleTransaction} />
            
            <Expense month={month} handleTransaction={handleTransaction} />
            
          </div>
        }
      </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { cleanDetailState } from '../redux/actions';
import Income from './Income';
import Expense from './Expense'
import { FaArrowAltCircleLeft } from 'react-icons/fa'

export default function Detail({ month, handleOnClick, handleTransaction }) {

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
          dispatch(cleanDetailState())
        }
      }, [])

  return (
    <div>
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
    </div>
  )
}

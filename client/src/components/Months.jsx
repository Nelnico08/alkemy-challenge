import React, {  useState } from 'react'
import { FaArrowAltCircleDown } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getMonthDetail } from '../redux/actions';
import Detail from './Detail'

export default function Months({ month, handleTransaction }) {

  const monthDetail = useSelector(state => state.detail);

  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState('');

  const dispatch = useDispatch();

  const handleOnClick = (monthId) => {
    setIsOpen(!isOpen)
    if(!isOpen){
      dispatch(getMonthDetail(monthId))
    }
    setHidden(hidden === '' ? 'hidden' : '')
  }

  return (
    <div>
      <div key={month?.id} 
        className={hidden === '' ? "flex justify-between pr-1 p-2 border-black border-[1px] bg-blue-400 font-bold select-none cursor-pointer hover:bg-cyan-400" : 'hidden'} 
        onClick={() => handleOnClick(month?.id)} >
        <h3>{month?.name}</h3>
        <div className='flex items-center'>
          <p>${month?.total}</p>
          <div className='w-5 h-5 flex justify-center items-center ml-3' ><FaArrowAltCircleDown /></div>
        </div>
      </div>
      <div>
        {
          isOpen && <Detail month={monthDetail} handleOnClick={handleOnClick} handleTransaction={handleTransaction} />
        }
      </div>
    </div>
  )
}

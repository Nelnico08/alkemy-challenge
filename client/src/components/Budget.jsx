import React from 'react';
import Months from './Months';
import mock from '../mock/mock.json'

export default function Budget() {
  
  return (
    <div className="flex flex-col w-[500px]">
      {
        mock && mock?.map(month => (
          <Months month={month} key={month.monthID} />
        ))
      }
      <div className="flex justify-center p-2 mt-1 rounded-md bg-green-700 text-pink-400 hover:bg-green-400">
        <button>Add month</button>
      </div>
    </div>
  )
}

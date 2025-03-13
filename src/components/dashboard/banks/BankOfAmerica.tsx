import React from 'react'
import BankTransactionTable from '../dataDisplay/BankTransactionTable';

const BankOfAmerica = () => {
  return (
    <>
      <div className='flex items-start justify-between bg-gray-100 w-full my-4 py-3 px-4 rounded-radius-4'>
          <div className="relative flex items-center justify-center gap-6 pt-3 pb-1">
              <div className="size-12 flex items-center justify-center uppercase rounded-full bg-blue-800 text-white">
                  BOA
              </div>

              <div className="">
                  <p className=''>Bank of America</p>
                  <p className='text-blue-700 font-semibold'>$ 2,698.12</p>
              </div>
          </div>

          <span className='text-green-700 bg-green-100 text-sm px-2 py-1 rounded-full flex items-center justify-center'>savings</span>
      </div>
      
      <BankTransactionTable />
  </>
  )
}

export default BankOfAmerica;
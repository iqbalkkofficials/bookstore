import React from 'react'
import { useState } from 'react'
import { getAllUserPurchaseBookAPI } from '../../services/allAPI'
import { useEffect } from 'react'

function PurchaseBook() {

  const [allPurchaseBook,setAllPurchaseBook] = useState([])
  
   useEffect(()=> {
      getAllBooksPurchased()
    },[])

  const getAllBooksPurchased = async ()=> {
    const result = await getAllUserPurchaseBookAPI()
    setAllPurchaseBook(result.data)
  }
  return (
    <div className='p-10 my-15 shadow rounded'>
      {
        allPurchaseBook?.length>0?
        allPurchaseBook?.map(book=>(
          <div key={book?._id} className='p-5 rounded mt-4 bg-gray-100'>
        <div className='md:grid items-center grid-cols-[3fr_1fr]'>
          <div className='px-4'>
            <h1 className='text-2xl'>{book?.title}</h1>
            <h1 className='text-xl'>{book?.author}</h1>
            <h1 className='text-lg text-blue-500'>${book?.discountPrice}</h1>
            <h1 className='text-justify mt-5'>{book?.abstract}</h1>
            <div className='flex mt-3'>
              {
                book?.status=="pending" ?
                <img width={'100px'} height={'100px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8Af3lKoJteihI4klbZwWNiFdnWX705OVJ8RztMKI_A&s=10' alt='pending'/>
                :book?.staus =="approve" ?
                <img width={'100px'} height={'100px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xpkw9wfUmxEfCQcYGT9uzLu2ndGWQm8cxSoxY7K2hA&s=10' alt='approve'/>:
                <img width={'100px'} height={'100px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoRDQ4au37snvgSC-kJW_tRSvz0nNJTJ4dpHMSEcJtXQ&s=10' alt='sold'/>
              }
            </div>
          </div>
        </div>
      </div>
        ))
        :
        <div className='font-bold text-xl'> You haven't purchased any books yet !!</div>
      }
    </div>
  )
}

export default PurchaseBook

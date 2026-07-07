import React from 'react'
import { useState } from 'react'
import { getAllUserUploadBookAPI, removeUserUploadBookAPI } from '../../services/allAPI'
import { useEffect } from 'react'

function UploadBookStatus() {

  const [allUserUploadBooks,setAllUSerUploadBooks] = useState([])

  useEffect(()=> {
    getAllUserUploadBooks()
  },[])

  const getAllUserUploadBooks = async()=> {
    const result = await getAllUserUploadBookAPI()
    setAllUSerUploadBooks(result.data)
  }

  const removeBook = async(id)=> {
    await removeUserUploadBookAPI(id)
    getAllUserUploadBooks()
  }
  return (
    <div className='p-10 my-15 shadow rounded'>
      {
        allUserUploadBooks?.length>0?
        allUserUploadBooks?.map(book=>(
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
                :book?.status =="approve" ?
                <img width={'100px'} height={'100px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xpkw9wfUmxEfCQcYGT9uzLu2ndGWQm8cxSoxY7K2hA&s=10' alt='approve'/>:
                <img width={'100px'} height={'100px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoRDQ4au37snvgSC-kJW_tRSvz0nNJTJ4dpHMSEcJtXQ&s=10' alt='sold'/>
              }
            </div>
          </div>
          <div className='px-4 mt-4 md:mt-0'>
            <img className='w-full' src={book?.imageURL} alt='image'/>
            <div className='mt-4 flex justify-end'>
              <button onClick={()=>removeBook(book?._id)} className='bg-red-600 text-white p-2 rounded cursor-pointer'>Delete</button>
            </div>
          </div>
        </div>
      </div>
        ))
        :
        <div className='font-bold text-xl'> You haven.t upload any books yet !!</div>
      }
    </div>
  )
}

export default UploadBookStatus

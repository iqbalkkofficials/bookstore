import React from 'react'
import { useState } from 'react'
import { getAllAdminBookAPI } from '../../services/allAPI'
import { useEffect } from 'react'

function AdminResources() {

  const [allBooks,setAllBooks]= useState([])
  console.log(allBooks)

  useEffect(()=>{
    getAllBooks()
  },[])

  const getAllBooks = async ()=> {
    const result = await getAllAdminBookAPI()
    setAllBooks(result.data)
  }
  return (
    <div>
      Admin Resource
    </div>
  )
}

export default AdminResources

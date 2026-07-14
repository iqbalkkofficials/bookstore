import React from "react";
import Footer from "../../components/Footer";
import Header from "../../users/components/Header";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllUserBookAPI } from "../../services/allAPI";
import { useContext } from "react";
import { searchContext } from "../../context API/ContextShare";


function Books() {
  const [toggle, setToggle] = useState(true);
  const [token,setToken] = useState("")
  const [allBooks,setAllBooks] = useState([])
  const [categoryList,setCategoryList] = useState([])
  const [dummyAllBooks,setDummyAllBooks] = useState([])
  const {searchKey,setSearchKey} = useContext(searchContext)

  useEffect(()=> {
    if(sessionStorage.getItem("token")){
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      getAllBooks()
    }
  },[searchKey])

  const getAllBooks = async ()=> {
    const result = await getAllUserBookAPI(searchKey)
    setAllBooks(result.data)
    setDummyAllBooks(result.data)
    const tempCategoryList = result.data.map(item=>item.category)
    setCategoryList([...new Set(tempCategoryList)]) 
  }

  const filterBooks = (category)=>{
    if(category!='all'){
      setAllBooks(dummyAllBooks?.filter(book=>book.category==category))
    }else {
      getAllBooks()
    }
  }

  return (
    <>
      <Header />
    {
      token ?
      <>
        <div className="flex flex-col justify-center items-center my-5">
        <h1 className="text-3xl font-bold my-5">All Books</h1>
        <div className="flex my-5">
          <input
          value={searchKey} onChange={e=>setSearchKey(e.target.value)}
            type="text"
            placeholder="Search Book By Title"
            className="p-2 border border-gray-200 w-100"
          />
          <button className="bg-blue-900 p-2 text-white">Search</button>
        </div>
      </div>
      {/* grid - filter & books */}
      <div className="md:grid grid-cols-4 p-5 md:px-40 mb-10">
        <div className="col-span-1">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Filter</h1>
            <button
              onClick={() => setToggle(!toggle)}
              className="font-bold text-2xl md:hidden"
            >
              <FaBars />
            </button>
          </div>

          <div className={toggle ? "block" : "hidden"}>
            <div className="mt-3">
              <label htmlFor="all">
                <input onClick={()=>filterBooks("all")} type="radio" name="filter" id="all" />
                  All
              </label>
            </div>

            {/* duplicate according to books category */}
            {
              categoryList?.map(category=>(
                <div className="mt-3">
              <label htmlFor={category}>
                <input onClick={()=>filterBooks(category)}  type="radio" name="filter" id="category" /> {category}
              </label>
            </div>
              ))
            }
          </div>
        </div>
        <div className="col-span-3">
             <div className="md:grid grid-cols-3 w-full my-10">
          {/* card */}
          {
            allBooks?.length>0 ?
            allBooks?.map(book=>(
<div className="shadow rounded p-3 m-4 md:my-0">
            <img
              width={"100%"}
              height={"300px"}
              src={book?.imageURL}
              alt="book"
            />
            <div className="flex flex-col justify-center items-center mt-4">
              <h2 className="text-xl font-bold">{book?.author}</h2>
              <h3 className="text-lg">{book?.title}</h3>
              <Link to={`/books/${book?._id}`} className="bg-blue-700 p-2 mt-2 text-white">View More...</Link>
            </div>
          </div>
            )):
            <div className="text-center font-bold">Book Not Found</div>
          }
          
          
        </div>
        </div>
      </div>
      </>:
      <div className="w-full h-screen flex justify-center items-center flex-col">
        <img  className="w-50" src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt="lock screen"/>
        <p className="text-lg font-bold my-15">Please <Link to={'/login'} className="text-blue-600 underline">Login</Link> to explore More..</p>
      </div>
    }

      <Footer />
    </>
  );
}

export default Books;

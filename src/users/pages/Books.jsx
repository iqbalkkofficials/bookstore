import React from "react";
import Footer from "../../components/Footer";
import Header from "../../users/components/Header";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function Books() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center my-5">
        <h1 className="text-3xl font-bold my-5">All Books</h1>
        <div className="flex my-5">
          <input
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
                <input type="radio" name="filter" id="all" />
                All
              </label>
            </div>

            {/* duplicate according to books category */}
            <div className="mt-3">
              <label htmlFor="category">
                <input type="radio" name="filter" id="category" />
                Category
              </label>
            </div>
          </div>
        </div>
        <div className="col-span-3">
             <div className="md:grid grid-cols-3 w-full my-10">
          {/* card */}
          <div className="shadow rounded p-3 m-4 md:my-0">
            <img
              width={"100%"}
              height={"300px"}
              src="/arrivalcard.jpg"
              alt=""
            />
            <div className="flex flex-col justify-center items-center mt-4">
              <h2 className="text-xl font-bold">Dan Brown</h2>
              <h3 className="text-lg">The Da Vinci Code</h3>
              <Link to={'/books/id'} className="bg-blue-700 p-2 mt-2 text-white">View More...</Link>
            </div>
          </div>
          <div className="shadow rounded p-3 m-4 md:my-0">
            <img
              width={"100%"}
              height={"300px"}
              src="/arrivalcard.jpg"
              alt=""
            />
            <div className="flex flex-col justify-center items-center mt-4">
              <h2 className="text-xl font-bold">Dan Brown</h2>
              <h3 className="text-lg">The Da Vinci Code</h3>
              <Link to={'/books/id'} className="bg-blue-700 p-2 mt-2 text-white">View More...</Link>
            </div>
          </div>
          <div className="shadow rounded p-3 m-4 md:my-0">
            <img
              width={"100%"}
              height={"300px"}
              src="/arrivalcard.jpg"
              alt=""
            />
            <div className="flex flex-col justify-center items-center mt-4">
              <h2 className="text-xl font-bold">Dan Brown</h2>
              <h3 className="text-lg">The Da Vinci Code</h3>
              <Link to={'/books/id'} className="bg-blue-700 p-2 mt-2 text-white">View More...</Link>
            </div>
          </div>
        </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Books;

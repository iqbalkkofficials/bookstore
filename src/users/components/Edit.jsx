import React, { useState } from "react";
import { FaPen, FaX } from "react-icons/fa6";

function Edit() {
      const [openCanvas, setOpenCanvas]= useState(false)
        return (
    <div>
      <button onClick={()=>setOpenCanvas(true)} className="bg-blue-600 text-white p-2  flex items-center rounded">
        Edit
      </button>
      {
        openCanvas &&
        <div>
        
        <div className="fixed inset-0 bg-gray-500/75 w-full h-full"></div>
        <div className="bg-white h-full w-90 z-50 fixed top-0 left-0">
          <div className="bg-black text-white px-3 py-4 flex justify-between text-2xl">
            <h1>Update User Profile</h1>
            <FaX onClick={()=>setOpenCanvas(false)}/>
          </div>
          <div className="my-5 flex items-center justify-center flex-col">
            <label htmlFor="userProfile">
              <input type="file" id="userProfile" hidden />
              <img
                width={"100px"}
                height={"100px"}
                style={{ borderRadius: "50%" }}
                src="/user.png"
                alt="user"
              ></img>
              <button
                className="fixed bg-blue-500 p-2 text-white"
                style={{ marginLeft: "50px", marginTop: "-10px" }}
              >
                <FaPen />
              </button>
            </label>
          </div>
          <div className=" mt-3 mb-3 w-full px-5">
            <input
              type="text"
              placeholder="Username"
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-3 w-full px-5">
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-3 w-full px-5">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-3 w-full px-5">
            <input
              type="text"
              placeholder="Bio"
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mt-5 w-full px-5 flex justify-end">
            <button className="bg-gray-400 px-3 py-2 rounded text-white">
              Reset
            </button>
            <button className="bg-blue-400 px-3 py-2 rounded text-white ms-5">
              Update
            </button>
          </div>
        </div>
      </div>
      }
      
    </div>
  );
}

export default Edit;

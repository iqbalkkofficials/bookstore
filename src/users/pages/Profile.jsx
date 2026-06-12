import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../users/components/Header";
import { FaCircleCheck } from "react-icons/fa6";
import UploadBook from "../components/UploadBook";
import UploadBookStatus from "../components/UploadBookStatus";
import PurchaseBook from "../components/PurchaseBook";
import Edit from "../../users/components/Edit"

function Profile() {
    const [currentTab,setCurrentTab] = useState(1)
  return (
    <>
      <Header />
      <div className="bg-black" style={{ height: "200px" }}></div>
      <div
        style={{
          width: "230px",
          height: "230px",
          borderRadius: "50%",
          marginTop: "-130px",
          marginLeft: "70px",
        }}
        className="bg-white p-3"
      >
        <img
          width={"200px"}
          height={"200px"}
          style={{ borderRadius: "50%" }}
          src="/user.png"
          alt=""
        />
      </div>
      <div className="md:flex justify-between px-20 mt-5">
        <div className="flex items-center">
          <h1 className="font-bold md:text-3xl text-2xl">username</h1>
          <FaCircleCheck className="text-blue-600 pl-1" />
        </div>
        <Edit />
      </div>
      <p  className="text-justify md:px-20 px-5 my-5">Bio</p>
      <p  className="text-justify md:px-20 px-5 my-5">test paragrapth</p>
      <div className="md:px-40">
{/* tabs */}
        <div className="flex justify-center items-center my-8 text-lg">
            <p onClick={()=> setCurrentTab(1)} className={currentTab==1?'p-4 border-gray-200 border-l border-r border-t rounded cursor-pointer':'p-4 border-gray-200 border-b rounded cursor-pointer'}>Upload Book</p>
            <p onClick={()=> setCurrentTab(2)} className={currentTab==2?'p-4 border-gray-200 border-l border-r border-t rounded cursor-pointer':'p-4 border-gray-200 border-b rounded cursor-pointer'}>Upload Book Status</p>
            <p onClick={()=> setCurrentTab(3)} className={currentTab==3?'p-4 border-gray-200 border-l border-r border-t rounded cursor-pointer':'p-4 border-gray-200 border-b rounded cursor-pointer'}>Purchase Book</p>
        </div>
        {/* tab content */}
        {
            currentTab==1 &&
            <div className="p-2"><UploadBook/></div>
        }
        {
            currentTab==2 &&
            <div className="p-2"><UploadBookStatus/></div>
        }
        {
            currentTab==3 &&
            <div className="p-2"><PurchaseBook/></div>
        }
      </div>
      <Footer />
    </>
  );
}

export default Profile;

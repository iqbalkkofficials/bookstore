import React from "react";
import { useState } from "react";
import {
  getAllAdminBookAPI,
  getAllAdminUsersAPI,
  updateBookStatusAPI,
} from "../../services/allAPI";
import { useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";
import axiosInstance from "../../api/axiosInstance";
import Footer from "../../components/Footer";

function AdminResources() {
  const [allBooks, setAllBooks] = useState([]);
  const [currentTab, setCurrentTab] = useState(1);
  const [allUsers, setAllUsers] = useState([]);
  console.log(allBooks);
  console.log(allUsers);

  useEffect(() => {
    if (currentTab == 1) {
      getAllBooks();
    } else {
      getAllUsers();
    }
  }, [currentTab]);

  const getAllBooks = async () => {
    const result = await getAllAdminBookAPI();
    setAllBooks(result.data);
  };

  const handleUpdateBookStatus = async (bookId) => {
    await updateBookStatusAPI(bookId);
    toast.success("Book Status Updated!!!");
    getAllBooks();
  };

  const getAllUsers = async () => {
    const result = await getAllAdminUsersAPI();
    setAllUsers(result.data);
  };
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <h1 className="text-3xl font-bold text-center mb-10">
            All Resources
          </h1>
          {/* tabs */}
          <div className="flex justify-center items-center my-8 text-lg">
            <p
              onClick={() => setCurrentTab(1)}
              className={
                currentTab == 1
                  ? "p-4 border-gray-200 border-l border-r border-t rounded cursor-pointer"
                  : "p-4 border-gray-200 border-b rounded cursor-pointer"
              }
            >
              Books
            </p>
            <p
              onClick={() => setCurrentTab(2)}
              className={
                currentTab == 2
                  ? "p-4 border-gray-200 border-l border-r border-t rounded cursor-pointer"
                  : "p-4 border-gray-200 border-b rounded cursor-pointer"
              }
            >
              Users
            </p>
          </div>
          {/* tab contents */}
          {currentTab == 1 && (
            <div className="md:grid grid-cols-4 w-full my-5">
              {allBooks?.length > 0 ? (
                allBooks?.map((book) => (
                  <div
                    key={book?._id}
                    className="shadow rounded p-3 m-4 md:my-0"
                  >
                    <img
                      width={"100%"}
                      height={"300px"}
                      src={book?.imageURL}
                      alt=""
                    />
                    <div className="flex flex-col justify-center items-center mt-4">
                      <h2 className="text-xl font-bold">{book?.author}</h2>
                      <h3 className="text-lg">{book?.title}</h3>
                      <p className="font-bold text-red-600">
                        {book?.discountPrice}
                      </p>
                      {/* prrove btn / check mark icon based status */}
                      {book?.status == "pending" ? (
                        <button
                          onClick={() => handleUpdateBookStatus(book?._id)}
                          className="bg-green-600 text-white mt-2 w-full p-2"
                        >
                          APPROVE
                        </button>
                      ) : (
                        <FaCheck
                          style={{
                            width: "70px",
                            height: "70px",
                            borderRadius: "50%",
                          }}
                          className="border p-5 text-white bg-green-600 cursor-pointer mt-2"
                        />
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="font-bold">Sorry...No Books added yet !!!</p>
              )}
            </div>
          )}

          {currentTab == 2 && (
            <div className="md:grid grid-cols-3 w-full my-5">
              {allUsers?.length > 0 ? (
                allUsers?.map((user) => (
                  <div key={user?._id} className="rounded bg-gray-200 p-2 m-2">
                    <h3 className="text-md text-red-500 font-bold">
                      ID: {user?._id}
                    </h3>
                    <div className="flex mt-3 items-center">
                      <img
                        width={"80px"}
                        height={"80px"}
                        style={{ borderRadius: "50%" }}
                        src={
                          user?.picture == ""
                            ? "/user.png"
                            : user?.picture.startsWith(
                                  "https://lh3.googleusercontent.com/",
                                )
                              ? user?.picture
                              : `${axiosInstance.defaults.baseURL}/uploads/${user?.picture}`
                        }
                        alt="user"
                      />
                      <div className="flex flex-col ml-3 w-full">
                        <h2 className="text-md text-blue-400 font-bold">
                          {user?.username}
                        </h2>
                        <p className="text-sm">{user?.email}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="font-bold">Sorry...No Users registered yet !!!</p>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AdminResources;

import React from "react";
import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaUser } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";

function Header() {
  const [token, setToken] = useState("");
  const [dp, setDp] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate()


  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const userToken = sessionStorage.getItem("token");
      const user = JSON.parse(sessionStorage.getItem("user"));
      setToken(userToken);
      setDp(user.picture);
    }
  }, [token]);

  const logout = ()=> {
    sessionStorage.clear()
    setToken("")
    setDp("")
    setDropdown(false)
    navigate('/')
  }
  return (
    <>
      {/* upper part */}
      <div className="grid grid-cols-3 p-3">
        {/* log */}
        <div className="flex items-center">
          <img
            width={"30px"}
            height={"30px"}
            src="https://cdn-icons-png.flaticon.com/512/5900/5900198.png"
            alt="Logo"
          />
          <h1 className="text-2xl font-bold ms-2 md:hidden">BOOK STORE</h1>
        </div>
        {/* title */}
        <div className="hidden md:flex items-center justify-center">
          <h1 className="text-3xl font-bold ms-2">BOOK STORE</h1>
        </div>
        {/* login part */}
        <div className="hidden md:flex items-center justify-end">
          {/* social media icon */}
          <FaInstagram />
          <FaTwitter className="mx-1" />
          <FaFacebook />
          {/* login link */}
          {!token ? (
            <Link
              to={"/login"}
              className="flex items-center border py-2 px-3 ms-3 hover:bg-black hover:text-white"
            >
              <FaUser className="me-1" />
              Login
            </Link>
          ) : (
            <div>
              {/* profile icon */}
              <button
                onClick={() => setDropdown(!dropdown)}
                className="shadow-sm rounded ms-5 p-1"
              >
                <img
                  width={"40px"}
                  height={"40px"}
                  style={{ borderRadius: "50%" }}
                  src={dp == "" ? "/user.png" : dp}
                  alt="profile icon"
                />
              </button>
              {/* drop down menu */}
              {dropdown && (
                <div className="absolute right-0 z-10 mt-2 w-40 bg-white shadow rounded ring-1 ring-black/5 p-2">
                  <Link to={"/profile"} className="flex">
                    Profile
                  </Link>
                  <button onClick={logout}  className="flex cursor-pointer">Logout</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {/* lower part */}
      <nav className="bg-black text-white items-center flex justify-center w-full py-3">
        <ul className="flex">
          <li>
            <Link to={"/"} className="md:mx-4">
              HOME
            </Link>
          </li>
          <li className="mx-1">
            <Link to={"/books"} className="md:mx-4">
              BOOKS
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="md:mx-4">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;

import React, { useContext } from "react";
import { FaPowerOff } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { routeContext } from "../../context API/AuthGuard";

function AdminHeader() {

  const navigate = useNavigate()
 const {role,setRole,isAuthorised,setIsAuthorised} = useContext(routeContext)

  const logout = ()=> {
    sessionStorage.clear()
    setIsAuthorised(false)
    navigate('/')
  }
  return (
    <>
      {/* header top */}
      <div className="flex justify-between items-center p-3 md:px-20">
        <div className="flex items-center">
          <img
            width={"30px"}
            height={"30px"}
            src="https://cdn-icons-png.flaticon.com/512/5900/5900198.png"
            alt="Logo"
          />
          <h1 className="text-2xl font-bold ms-2">BOOK STORE</h1>
        </div>
        {/* logout btn */}
        <div onClick={logout} className="flex items-center px-3 py-2 bg-black text-white rounded">
          Logout <FaPowerOff className="ms-2" />
        </div>
      </div>
      {/* header body */}
      <div className="w-full p-3 bg-black text-white">
        <marquee>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          impedit distinctio similique ea voluptas. Optio fuga magni, enim,
          molestiae nemo molestias deserunt reprehenderit reiciendis qui
          cupiditate, velit similique mollitia! Expedita.
        </marquee>
      </div>
    </>
  );
}

export default AdminHeader;

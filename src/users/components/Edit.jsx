import React, { useState } from "react";
import { useEffect } from "react";
import { FaPen, FaX } from "react-icons/fa6";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { userUpdateAPI } from "../../services/allAPI";

function Edit() {
      const [openCanvas, setOpenCanvas]= useState(false)
      const [userDetails,setUserDetails] = useState({
        id:"",username:"",password:"",cPassword:"",picture:"",bio:""
      })
      const [existingPicture,setExistingPicture] = useState("")
      const [passwordMatch,setPasswordMatch] = useState(true)
      const [imageFileType,setImageFileType] = useState(false)
      const [preview,setPreview] = useState("")
      const navigate = useNavigate()

      useEffect(()=>{
        if(sessionStorage.getItem("user")) {
          const user = JSON.parse(sessionStorage.getItem("user"))
          setUserDetails({...userDetails,id:user._id,username:user.username,bio:user.bio})
          setExistingPicture(user.picture)
        }
      },[])

      const handleFileUpload = (e)=> {
        const imageFile = e.target.files[0]
        if(imageFile.type.startsWith("image/")) {
          setUserDetails({...userDetails,picture:imageFile})
          const url = URL.createObjectURL(imageFile)
          setPreview(url)
          setImageFileType(true)
        } else {
          setImageFileType(false)
        }
      }

      const checkPasswordMatch = (e) => {
        setUserDetails({...userDetails,cPassword:e.target.value})
        userDetails.password == e.target.value ? setPasswordMatch(true) : setPasswordMatch(false)
      }

      const handleProfileUpdate = async ()=> {
        const {id,username,password,cPassword,bio,picture} = userDetails
        if(!username || !password || !cPassword || !bio) {
          toast.info("Please fill the form completely")
        } else if(passwordMatch) {
          const reqbody = new FormData()
          for(let key in userDetails) {
            if (key !="picture") {
              reqbody.append(key,userDetails[key])
            } else {
              preview ? reqbody.append("picture",picture) : reqbody.append("picture",existingPicture)
            }
          }
          const result  = await userUpdateAPI(id,reqbody)
          console.log(result)
          if(result.status ==200) {
            toast.success("User profile updated successfully... Please login !")
            setTimeout(()=>{
              sessionStorage.clear()
              navigate("/login")
            },2500)
          }
        }
      }

      const resetUpdateForm = ()=> {
         const user = JSON.parse(sessionStorage.getItem("user"))
          setUserDetails({...userDetails,id:user._id,username:user.username,bio:user.bio})
          setExistingPicture(user.picture)
          setPreview("")
          setImageFileType(false)
          setPasswordMatch(true)
      }
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
            <label htmlFor="userProfile"className="pb-3">
              <input onChange={e=>handleFileUpload(e)} type="file" id="userProfile" hidden />
              {
                existingPicture == ""?<img
                width={"100px"}
                height={"100px"}
                style={{ borderRadius: "50%" }}
                src={preview? preview :"/user.png"}
                alt="user"
              />:existingPicture.startsWith('https://lh3.googleusercontent.com/') ?
              <img
                width={"100px"}
                height={"100px"}
                style={{ borderRadius: "50%" }}
                src={preview? preview :existingPicture}
                alt="user"
              /> :
              <img
                width={"100px"}
                height={"100px"}
                style={{ borderRadius: "50%" }}
                src={preview? preview:`${axiosInstance.defaults.baseURL}/uploads/${existingPicture}`}
                alt="user"
              />
              }
              
              <button
                className="fixed bg-blue-500 p-2 text-white"
                style={{ marginLeft: "50px", marginTop: "-10px" }}
              >
                <FaPen />
              </button>
            </label>
            {
              !imageFileType && <div className="mt-5 text-yellow-500 text-sm">* Only Accept Image File</div>
            }
          </div>
          <div className=" mt-3 mb-3 w-full px-5">
            <input
              type="text"
              value={userDetails.username}
              onChange={e=>setUserDetails({...userDetails,username:e.target.value})}
              placeholder="Username"
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-3 w-full px-5">
            <input
              type="password"
               value={userDetails.password}
              onChange={e=>setUserDetails({...userDetails,password:e.target.value})}
              placeholder="Password"
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-3 w-full px-5">
            <input
              type="password"
               value={userDetails.cPassword}
              onChange={e=>checkPasswordMatch(e)}
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
           {
              !passwordMatch && <div className="mt-5 text-yellow-500 text-sm">* Password does not match</div>
            }
          <div className="mb-3 w-full px-5">
            <input
              type="text"
              value={userDetails.bio}
              onChange={e=>setUserDetails({...userDetails,bio:e.target.value})}
              placeholder="Bio"
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          
          <div className="mt-5 w-full px-5 flex justify-end">
            <button onClick={resetUpdateForm} className="bg-gray-400 px-3 py-2 rounded text-white">
              Reset
            </button>
            <button onClick={handleProfileUpdate} className="bg-blue-400 px-3 py-2 rounded text-white ms-5">
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

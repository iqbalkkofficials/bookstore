import React, { useState, useEffect } from "react";
import  AdminHeader  from "../components/AdminHeader";
import AdminSidebar  from "../components/AdminSidebar"
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { adminUpdateAPI } from "../../services/allAPI";
import { FaPen, FaX } from "react-icons/fa6";
import axiosInstance from "../../api/axiosInstance";

function AdminSettings() {
  const [userDetails, setUserDetails] = useState({
    id: "",
    username: "",
    password: "",
    cPassword: "",
    picture: "",
    bio: "",
  });
  const [existingPicture, setExistingPicture] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [imageFileType, setImageFileType] = useState(false);
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"));
      setUserDetails({
        ...userDetails,
        id: user._id,
        username: user.username,
        bio: user.bio,
      });
      setExistingPicture(user.picture);
    }
  }, []);

  const checkPasswordMatch = (e) => {
    setUserDetails({ ...userDetails, cPassword: e.target.value });
    userDetails.password == e.target.value
      ? setPasswordMatch(true)
      : setPasswordMatch(false);
  };

  const handleFileUpload = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile.type.startsWith("image/")) {
      setUserDetails({ ...userDetails, picture: imageFile });
      const url = URL.createObjectURL(imageFile);
      setPreview(url);
      setImageFileType(true);
    } else {
      setImageFileType(false);
    }
  };

  const resetUpdateForm = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    setUserDetails({
      ...userDetails,
      id: user._id,
      username: user.username,
      bio: user.bio,
    });
    setExistingPicture(user.picture);
    setPreview("");
    setImageFileType(false);
    setPasswordMatch(true);
  };

  const handleProfileUpdate = async () => {
    const { id, username, password, cPassword, bio, picture } = userDetails;
    if (!username || !password || !cPassword) {
      toast.info("Please fill the form completely");
    } else if (passwordMatch) {
      const reqbody = new FormData();
      for (let key in userDetails) {
        if (key != "picture") {
          reqbody.append(key, userDetails[key]);
        } else {
          preview
            ? reqbody.append("picture", picture)
            : reqbody.append("picture", existingPicture);
        }
      }
      const result = await adminUpdateAPI(id, reqbody);
      console.log(result);
      if (result.status == 200) {
        toast.success("Admin profile updated successfully... Please login !");
        setTimeout(() => {
          sessionStorage.clear();
          navigate("/login");
        }, 2500);
      }
    }
  };

  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1"><AdminSidebar/></div>
        <div className="col-span-4">
          <h1 className="font-bold text-3xl text-center mb-10">Settings</h1>
          <div className="md:grid grid-cols-2 items-center gap-5">
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur impedit distinctio similique ea voluptas. Optio fuga
              magni, enim, molestiae nemo molestias deserunt reprehenderit
              reiciendis qui cupiditate, velit similique mollitia! Expedita.
              Lorem ipsum dolor sit amet consectetur adipisicing eli
            </div>
            <div>
          <div className="m-10 flex flex-col items-center justify-center bg-blue-200 p-5 rounded">
            <label htmlFor="userProfile" className="pb-3">
              <input
                onChange={(e) => handleFileUpload(e)}
                type="file"
                id="userProfile"
                hidden
              />
              {existingPicture == "" ? (
                <img
                  width={"100px"}
                  height={"100px"}
                  style={{ borderRadius: "50%" }}
                  src={preview ? preview : "/user.png"}
                  alt="user"
                />
              ) : existingPicture.startsWith(
                  "https://lh3.googleusercontent.com/",
                ) ? (
                <img
                  width={"100px"}
                  height={"100px"}
                  style={{ borderRadius: "50%" }}
                  src={preview ? preview : existingPicture}
                  alt="user"
                />
              ) : (
                <img
                  width={"100px"}
                  height={"100px"}
                  style={{ borderRadius: "50%" }}
                  src={
                    preview
                      ? preview
                      : `${axiosInstance.defaults.baseURL}/uploads/${existingPicture}`
                  }
                  alt="user"
                />
              )}

              <button
                className="fixed bg-blue-500 p-2 text-white"
                style={{ marginLeft: "50px", marginTop: "-10px" }}
              >
                <FaPen />
              </button>
            </label>
            {!imageFileType && (
              <div className="mt-5 text-yellow-500 text-sm">
                * Only Accept Image File
              </div>
            )}

            <div className=" mt-3 mb-3 w-full px-5">
              <input
                type="text"
                value={userDetails.username}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, username: e.target.value })
                }
                placeholder="Username"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div className="mb-3 w-full px-5">
              <input
                type="password"
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
                placeholder="Password"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div className="mb-3 w-full px-5">
              <input
                type="password"
                value={userDetails.cPassword}
                onChange={(e) => checkPasswordMatch(e)}
                placeholder="Confirm Password"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            {!passwordMatch && (
              <div className="mt-5 text-yellow-500 text-sm">
                * Password does not match
              </div>
            )}

            <div className="mt-5 w-full px-5 flex justify-end">
              <button
                onClick={resetUpdateForm}
                className="bg-gray-400 px-3 py-2 rounded text-white"
              >
                Reset
              </button>
              <button
                onClick={handleProfileUpdate}
                className="bg-blue-400 px-3 py-2 rounded text-white ms-5"
              >
                Update
              </button>
            </div>
          </div>
          </div>
          </div>
          {/* body */}
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminSettings;

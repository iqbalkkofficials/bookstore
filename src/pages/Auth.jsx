import React from "react";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { googleLoginAPI, registerAPI } from "../services/allAPI";
import { loginAPI } from "../services/allAPI";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function Auth({ insideRegisterRoute }) {
  console.log(insideRegisterRoute ? "Register" : "Login");

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: insideRegisterRoute
        ? Yup.string()
            .min(3, "Must be atleast 3 characters")
            .required("Username required")
        : Yup.string(),
      email: Yup.string().email("Invalid Email").required("Email required"),
      password: Yup.string().required("Password required"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (insideRegisterRoute) {
        handleRegister(values);
      } else {
        handleLogin(values);
      }
      //resetForm();
    },
  });

  const handleRegister = async (userData) => {
    const result = await registerAPI(userData);
    if (result.status == 201) {
      toast.success("Successfully registered. Please login");
    } else {
      console.log(result);
    }
    navigate("/login");
  };

  const handleLogin = async (userData) => {
    const result = await loginAPI(userData);
    if (result.status == 200) {
      toast.success("Login Successfull");
      sessionStorage.setItem("user", JSON.stringify(result.data.user));
      sessionStorage.setItem("token", result.data.token);
      setTimeout(() => {
        if (result.data.user.role == "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }, 2500);
    } else {
      toast.error(result.response);
    }
    navigate("/login");
  };

  const handleGoogleLogin = async (credentialResponse)=> {
    
    const jwtData = jwtDecode(credentialResponse.credential)
    const {name,email,picture} = jwtDecode(credentialResponse.credential)

    const result = await googleLoginAPI({username:name,email,password:"googlePassword",picture})
     if (result.status == 200) {
      toast.success("Login Successfull");
      sessionStorage.setItem("user", JSON.stringify(result.data.user));
      sessionStorage.setItem("token", result.data.token);
      setTimeout(() => {
        if (result.data.user.role == "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }, 2500);
    } else {
    }
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[url(/authBg.jpg)]  bg-cover  text-black">
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">BOOK STORE</h1>
        <div
          style={{ width: "400px" }}
          className="bg-black text-white p-5 flex justify-center items-center flex-col my-5"
        >
          <div
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
            className="border mb-5 flex justify-center items-center"
          >
            <FaUser className="text-3xl" />
          </div>
          <h1 className="text-2xl">
            {insideRegisterRoute ? "Register" : "Login"}
          </h1>
          <form onSubmit={formik.handleSubmit} className="my-5 w-full">
            {insideRegisterRoute && (
              <>
                <input
                  type="text"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  placeholder="Username"
                  className="bg-white p-2 w-full rounded mt-5 mb-3 text-black"
                ></input>
                <div className="mb-3 text-xs text-yellow-400">
                  {formik.errors.username}
                </div>
              </>
            )}

            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Email"
              className="bg-white p-2 w-full rounded mt-5 mb-3 text-black"
            ></input>
            <div className="mb-3 text-xs text-yellow-400">
              {formik.errors.email}
            </div>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Password"
              className="bg-white p-2 w-full rounded mt-5 mb-3 text-black"
            ></input>
            <div className="mb-3 text-xs text-yellow-400">
              {formik.errors.password}
            </div>
            <div className="text-start mb-5">
              <p className="text-xs text-orange-400">
                *Never shae your password with others
              </p>
            </div>
            <div className="text-center">
              {insideRegisterRoute ? (
                <button
                  type="submit"
                  className="bg-green-700 p-2 w-full rounded"
                >
                  Register
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-green-700 p-2 w-full rounded"
                >
                  Login
                </button>
              )}
            </div>
            {!insideRegisterRoute && (
              <div className="my-5 text-center">
                <p>--------------------or-------------------</p>
                <div className="flex justify-center items-center pt-2">
                  <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    handleGoogleLogin(credentialResponse)
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
                </div>
                 
               
                
              </div>
            )}
            <div className="my-5 flex justify-center">
              {insideRegisterRoute ? (
                <p className="text-blue-600">
                  Existing User ?{" "}
                  <Link to={"/login"} className="ms-3">
                    Sign In
                  </Link>
                </p>
              ) : (
                <p className="text-blue-600">
                  New User ?{" "}
                  <Link to={"/register"} className="ms-3">
                    Sign Up
                  </Link>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;

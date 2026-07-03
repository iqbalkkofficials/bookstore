import apiService from "../api/apiService";

//http://localhost:3000/register : post request by authentication component when register button clicked

export const registerAPI = async (userData) => {
    return await apiService("POST","/register",userData)
}

//http://localhost:3000/login : post request by authentication component when login button clicked

export const loginAPI = async (userData) => {
    return await apiService("POST","/login",userData)
}

//http://localhost:3000/google-login: post request by authentication component when login button clicked
export const googleLoginAPI = async (userData) => {
    return await apiService("POST","/google-login",userData)
}

//http://localhost:3000/users/6a3472108aefa1f6e0659b69 : put request by edit component when udate button click

export const userUpdateAPI = async (id,userData) => {
    return await apiService("PUT",`users/${id}`,userData)
}

//http://localhost:3000/books : post request by uploadBook component when upload botton clicked

export const addBookAPI = async (bookDetails) => {
    return await apiService("POST",`books`,bookDetails)
}
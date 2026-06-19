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
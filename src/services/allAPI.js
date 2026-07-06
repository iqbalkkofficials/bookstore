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
    return await apiService("POST",`/books`,bookDetails)
}

//http://localhost:3000/user-books: get request by bookstatus component when user loads
export const getAllUserUploadBookAPI = async ()=> {
    return await apiService("GET",`/user-books`)
}

//http://localhost:3000/user-books: delete request by bookstatus component when user deletes a book
export const removeUserUploadBookAPI = async (bookId)=> {
    return await apiService("DELETE",`/user-books/${bookId}`)
}

//http://localhost:3000/user-purchase-books: get request by purchase book component when user loads the page
export const getAllUserPurchaseBookAPI = async ()=> {
    return await apiService("GET",`/user-purchase-books`)
}

//http://localhost:3000/home-books: get request placed by home component when page landing page loads

export const getLatestBookAPI = async ()=> {
    return await apiService("GET",`/home-books`)
}

//http://localhost:3000/all-books: get request by admin resource component when page loads
export const getAllAdminBookAPI = async ()=> {
    return await apiService("GET",`/all-books`)
}

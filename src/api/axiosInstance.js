import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:"http://localhost:3000",
    timeout:10000
})

axiosInstance.interceptors.response.use(
    (response)=> {
        console.log("HTTP Response received");
        return response
    },
    (error)=> {
        if(error.response) {
            const status = error.response.status
            if(status == 401) {
                console.log("Unauthorised access");
            } else if(status ==404) {
                console.log("API not found");
            } else if(status ==500) {
                console.log("Server error");
            } else if(error.request) {
                console.log("Client error");
                return error.request
            } else {
                console.log (`Error: ${error.message}`)
            }

            return Promise.reject(error)
        }
    }
)

export default axiosInstance
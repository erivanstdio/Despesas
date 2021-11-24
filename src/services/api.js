import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyaXZhc3RkaW9AZ21haWwuY29tIiwiaWF0IjoxNjM3NjkzMjA0fQ.01Yr6zVPJzEx05AENWdJ60P_cHgzZ2CT3xXj0gGuJgM"

const api = axios.create({
    
    baseURL: 'https://sofit-mobile-challenge.herokuapp.com/',
    
    headers: {
      Authorization: `Bearer ${token}`
    }

})


export default api;
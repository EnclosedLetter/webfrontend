import Axios from "axios"
import axiosWithAuth from "../utils/axiosWithAuth"

export const LOG_IN_START = "LOG_IN_START"
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS"
export const LOG_IN_FAILURE = "LOG_IN_FAILURE"
export const SIGN_UP_START = "SIGN_UP_START"
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS"
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE"

export const logInSuccess = (userName) => (dispatch) => {
    dispatch ({
        type: LOG_IN_SUCCESS, 
        payload: userName
    })
    axiosWithAuth().post("/login", {
        userName: "", password: ""
    }).then(res=>{
        localStorage.setItem("token", res.data.token)
    }).catch(error => {console.log(error)})
}
import Axios from "axios"

export const FETCH_LIST_START = "FETCH_LIST_START"
export const FETCH_LIST_SUCCESS = "FETCH_LIST_SUCCESS"
export const FETCH_LIST_FAILURE = "FETCH_LIST_FAILURE"

export const getList = (list) => (dispatch) => {
    dispatch ({
        type: FETCH_LIST_START, payload: list
    })
}
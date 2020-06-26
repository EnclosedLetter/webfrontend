import Axios from "axios"

const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return Axios.create({
        baseURL: 'https://medcab-backend-test.herokuapp.com/api/auth',
        headers:{
            Authorization: token
        }
    })
}
export default axiosWithAuth;
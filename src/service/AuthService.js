import axios from 'axios'

const url = `http://localhost:8080/api/auth`

class AuthService {
    static login(username, password) {
        return axios.post(`${url}/login`, {username, password})
            
    }

    static signup(username, email, password) {
        return axios.post(`${url}/signup`, {
            username, email, password
        })
    }

    static getCurrentUser() {
        return JSON.parse(sessionStorage.getItem("user"))
    }
}

export default AuthService
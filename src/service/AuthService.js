import axios from 'axios'

const url = `https://localhost:8080/api/auth`

class AuthService {
    static login(username, password) {
        return axios.post(`${url}/login`, {username, password})
            .then(res => {
                if(res.data.accessToken) {
                    sessionStorage.setItem("user", JSON.stringify(res.data))
                }
                return res.data
            })
    }

    static logout() {
        sessionStorage.removeItem("user")
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
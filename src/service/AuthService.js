import axios from 'axios'

const url = `https://localhost:8080/api/auth`

class AuthService {
    login(username, password) {
        return axios.post(`${url}/login`, {username, password})
            .then(res => {
                if(res.data.accessToken) {
                    sessionStorage.setItem("user", JSON.stringify(res.data))
                }
                return res.data
            })
    }

    logout() {
        sessionStorage.removeItem("user")
    }

    register(username, email, password) {
        return axios.post(`${url}/signup`, {
            username, email, password
        })
    }

    getCurrentUser() {
        return JSON.parse(sessionStorage.getItem("user"))
    }
}

export default AuthService
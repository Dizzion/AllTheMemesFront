import axios from 'axios'
import AuthHeader from '../service/AuthHeader'

const url = `http://localhost:8080/api/v1`

class MemeModel {
    static all = () => {
        let request = axios.get(`${url}/memes`)
        return request
    }
    static show = (id) => {
        let request = axios.get(`${url}/memes/${id}`)
        return request
    }
    static createCom = (id, commentData) => {
        let request = axios.post(`${url}/memes/${id}`, commentData)
        return request
    }
    static search = (hashtag) => {
        let request = axios.get(`${url}/memes/search/${hashtag}`)
        return request
    }
    static create = (memeData) => {
        let request = axios.post(`${url}/memes`, memeData, { headers: AuthHeader() } )
        return request
    }
    static update = (id, memeData) => {
        let request = axios.put(`${url}/memes/${id}`, memeData, { headers: AuthHeader() })
        return request
    }
    static delete = (id) => {
        let request = axios.delete(`${url}/memes/${id}`, { headers: AuthHeader() })
        return request
    }
}

export default MemeModel
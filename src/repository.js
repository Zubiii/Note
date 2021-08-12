import axios from "axios"
const BASE_URL = 'http://127.0.0.1:1000'

export function getNotes(){
    return axios.get(`${BASE_URL}/api/note/list`)
                .then(res => res.data)
}

export function createNote(data){
    return axios.post(`${BASE_URL}/api/note/create`, {title: data.title, body: data.body})
                .then(res => res.data)
                .catch(err => Promise.reject(err.message))
}
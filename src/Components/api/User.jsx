import axios from "axios"

export function getUser(id) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => res.data)
}
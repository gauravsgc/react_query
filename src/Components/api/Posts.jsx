import axios from "axios"

export function getPosts() {
  return axios
    .get("http://localhost:8000")
    .then(res => res.data)
}
export function getPost() {
    return axios.get(`http://localhost:8000`).then(res => res.data)
}
   
  
  export function createPost({ username,userpass }) {
    return axios
      .post("http://localhost:8000", {
       username,
       userpass,
       
      })
      .then(res => res.data).catch(error => {
        console.log(error.message);
    });
  }

import { useMutation, useQueryClient } from "react-query"
import { useRef } from "react"
import { createPost } from "./api/Posts"
import Post from "./Post"

export default function CreatePost({ setCurrentPage }) {
  const usernameRef = useRef()
  const userpassRef = useRef()
  const queryClient = useQueryClient()
  const createPostMutation = useMutation({
    mutationFn: createPost,//asynch
    onSuccess: (data,variables,context) => {
      queryClient.setQueryData(["posts", data.id], data)//cached..
      queryClient.invalidateQueries(["posts"], { exact: true })//inalidate...
      //setCurrentPage(<Post id={data.id} />)
      setCurrentPage(<Post/>)
    },
    onMutate:variables=>{
      return {hi:"bye"}
    }
  })
  

  function handleSubmit(e) {
    e.preventDefault()
    createPostMutation.mutate({
      username: usernameRef.current.value,
      userpass: userpassRef.current.value,
    })
  }

  return (
    <div>
      {createPostMutation.isError && JSON.stringify(createPostMutation.error)}
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">username</label>
          <input id="username" ref={usernameRef} />
        </div>
        <div>
          <label htmlFor="userpass">userpass</label>
          <input id="userpass" ref={userpassRef} />
        </div>
        <button disabled={createPostMutation.isLoading}>
          {createPostMutation.isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  )
}

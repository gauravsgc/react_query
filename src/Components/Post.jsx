import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
// import {getPost} from './api/Posts';
function Post() {

  const postQuery = useQuery({
    queryKey:['posts'],
    // queryFn: getPost,
    
    queryFn: async () => {
      const response = await axios.get('http://localhost:8000');
      const data = await response.data;
      return data;
    },
    
    
  })
//postQuery.fetchstatus=="idle/fetching/load"
//postQuery.status
  // if( postQuery.isLoading ) return ( <h1>Loading....</h1>)
  // if( postQuery.isError ) return (<h1>Error loading data!!!</h1>)
  // if (postQuery.status === "error") {
  //   return <h1>{JSON.stringify(postQuery)}</h1>
  // }
  return (
    <div>
      <h1>Home</h1>
      {postQuery.isLoading
            ? "Loading User..."
            : postQuery.isError
            ? "Error Loading User"
            :
             postQuery.data.Data.map( (item) => ( <p key={item._id}>{item.username}</p>)) }
    </div>
  )
}

export default Post;
import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import {getPosts} from './api/Posts';
function PostList2() {

  const postQuery = useQuery({
    queryKey: ['posts'],
    // queryFn:getPosts
    queryFn: getPosts,
    // queryFn: async () => {
    //   const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //   const data = await response.data;
    //   return data;
    // }
  })

  if( postQuery.isLoading ) return ( <h1>Loading....</h1>)
  if( postQuery.isError ) return (<h1>Error loading data!!!</h1>)
  
  return (
    <div>
      <h1>Home2</h1>
      { postQuery.data.Data.map( (item) => ( <p key={item._id}>{item.username}</p>)) }
    </div>
  )
}

export default PostList2;
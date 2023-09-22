import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import {getPosts} from './api/Posts';
function PostList1() {

  const postQuery = useQuery({
    queryKey:['posts'],//unique identifier of function
    queryFn: getPosts,//asynchronous function
    
    // queryFn: async () => {
    //   const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //   const data = await response.data;
    //   return data;
    // },
    // refetchInterval: 2000,
  })
//postQuery.fetchstatus=="idle/fetching/load"
//postQuery.status
  if( postQuery.isLoading ) return ( <h1>Loading....</h1>)
  if( postQuery.isError ) return (<h1>Error loading data!!!</h1>)
  if(postQuery.status===200) return (<h1>data comming!!!</h1>)
  
  
  return (
    <div>
      <h1>Home</h1>
      { postQuery.data.Data.map( (item) => ( <p key={item._id}>{item.username}</p>)) }
    </div>
  )
}

export default PostList1;
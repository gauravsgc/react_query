import { useState } from 'react'

export default function Example() {
   
  return (
    <div>
        <button onClick={()=>setCurrentPage(PostList1)}>PostList1</button>
        <button onClick={()=>setCurrentPage(PostList2)}>PostList2</button>
        {currentPage}
    </div>
  )
}

// import { Container } from '@mui/material'
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
import {useState} from 'react'
import './App.css'
import { ReactQueryDevtools } from "react-query/devtools";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import First from './Components/First';
// import Second from './Components/ContactForm';
// import Dash from './Components/Dash';
// import Enroll from './Components/Enroll';


// import Example from './Example';

// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import { Box } from '@mui/material';
// import { BoxProps } from '@mui/material';
// import {  createTheme } from '@mui/material';

/*------redux form------*/
// import { store } from './store.jsx'
// import { Provider } from 'react-redux'
/*------redux form------*/
import PostList1 from './Components/PostList1';
import PostList2 from './Components/PostList2';
import AddPost from './Components/AddPost';
import Post from './Components/Post';

export default function App() {
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: 'light',
  //   },
  // });
  const [currentPage,setCurrentPage]=useState(<PostList1/>)
  return (
    <div>
      
{/* to wrap a react query for your entire app */}

{/* amit */}

        <button onClick={()=>setCurrentPage(<PostList1/>)}>PostList1</button>
        <button onClick={()=>setCurrentPage(<PostList2/>)}>PostList2</button>
        {/* <button
        
        onClick={() => setCurrentPage(<Post id={1} />)}
      >
        First Post
      </button> */}
      <button
        
        onClick={() => setCurrentPage(<Post />)}
      >
       all post
      </button>
        <button
        onClick={() =>
          setCurrentPage(<AddPost setCurrentPage={setCurrentPage} />)
        }
      >
        New Post
      </button>
        {currentPage}
        <ReactQueryDevtools initialIsOpen />
{/* <Dash/>dash board page */}
{/* <Enroll/> */}
       {/* <ThemeProvider theme={darkTheme}>
       <Container  fixed >
       <CssBaseline /> */}

     {/* <First/> */}

     {/* ------redux form------ */}
     {/* <Provider store={store}>
    <Second/>
  </Provider> */}
  {/* ------redux form------ */}

       {/* </Container>
    </ThemeProvider> */}
     
  
    </div>
  )
}

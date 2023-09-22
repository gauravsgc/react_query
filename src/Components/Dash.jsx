import React,{useEffect,useState, useRef} from 'react'
import './style.css'
import { useDownloadExcel } from 'react-export-table-to-excel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//pagination call....
import ReactPaginate from 'react-paginate';
//excel js
import ExcelJS from "exceljs";
import { Button } from 'react-bootstrap';
export default function Dash() {
  const [AllQuery,setAllQuery] = useState([]);
  const [pagenumber,setpagenumber]=useState(0);
  const userperpage=40;
  const pagesvisited=pagenumber*userperpage;
 
  const [name,setName] = useState("");

  // console.log(CustomData);
 
  const getAllQuery = async () =>{
    
  
    try {
    //https://newstaging.vidalhealth.com:7743/
    //https://wellex.vidalhealth.com:7744
      let response = await fetch('https://newstaging.vidalhealth.com:7743/api/hospital-app/ask_corner/get_queries_all/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
           
        },
      });

      let json = await response.json();
      console.log(json,'info')
    
      setAllQuery(json.get_queries_data)

    } catch (error) {
      console.error(error);
    }
  
  };

  useEffect(() => {
   
    getAllQuery()
  }, []);
 

 

  const SearchData=(AllQuery)=>{
    console.log(name);
    console.log(name.length);

    let result;
   if(name.length>=3){
   
    result=AllQuery.filter(e=>e.patient_mobile.toString().includes(name)||e.query_status.toLowerCase().includes(name)
    ||e.patient_full_name.toLowerCase().includes(name));

    
    console.log(result);
    return result;
   }
   else{
    result=AllQuery;
    return result;
   }
};
// SearchData(AllQuery);
//in line no 69 before serchData (AllQuery) only AllQuery was there
const displayUser=SearchData(AllQuery).slice(pagesvisited,pagesvisited+userperpage)
.map((row,index) => (
  <TableRow
    key={index}
    
  >
   
    <TableCell align="right">{index+1}</TableCell>
    <TableCell align="right">{row.query_submitted_time}</TableCell>
    <TableCell align="right">{row.patient_mobile}</TableCell>
    <TableCell align="right">{row.query_number}</TableCell>   
    <TableCell align="right">{row.patient_full_name}</TableCell>
    <TableCell align="right">{row.clinical_speciality}</TableCell>
    <TableCell align="right">N/A</TableCell>
    <TableCell align="right">{row.aging}</TableCell>
    <TableCell align="right">{row.query_status}</TableCell>
  </TableRow>
))
  const pageCount=Math.ceil(AllQuery.length/userperpage);
  // console.log(pageCount);

  const changePage = ({selected}) => {
    window.scrollTo(0,0);
    // alert("button clicked",selected);
    setpagenumber(selected)
  };


//excel workbook:--
 
const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'agentlogin',
        sheet: 'agent'
    })
  //excel workbook end..


  return (
    <>
    <input type="text" name="" 
        value={name}
          onChange={(e) => setName(e.target.value)} placeholder='search by query id' />
     <button onClick={onDownload}> Export excel </button>
      
<TableContainer component={Paper}>
      <Table  ref={tableRef} sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">SI. No.</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Mobileno</TableCell>
            <TableCell align="right">Query ID</TableCell>
            <TableCell align="right">Patient Name</TableCell>
            <TableCell align="right">Speciality</TableCell>
            <TableCell>Provider</TableCell>
            <TableCell>Aging</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {displayUser}
        
        
        </TableBody>

        </Table>
    </TableContainer>
   <div style={{'margin-top':'20px'}}>
   <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttns"}
        nextClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        pageCount={pageCount}
        previousLabel="< previous"
     
      />
   </div>
    </>
  )
}

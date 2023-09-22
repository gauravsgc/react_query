import React from 'react'
import ReactPaginate from 'react-paginate';
export default function Mytable() {
    const [pagenumber,setpagenumber]=useState(0);
  const userperpage=20;
  const pagesvisited=pagenumber*userperpage;
     const displayUser=AllQuery.slice(pagesvisited,pagesvisited+userperpage)
  .map((row,index) => (
    <TableRow
      key={index}
      
    >
     
      <TableCell align="right">{index+1}</TableCell>
      <TableCell align="right">{row.query_submitted_time}</TableCell>
      
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
  return (
    <div>


         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">SI. No.</TableCell>
            <TableCell align="right">Date</TableCell>
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
  )
}
